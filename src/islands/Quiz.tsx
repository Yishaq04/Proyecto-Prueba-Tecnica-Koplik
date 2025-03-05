import { useEffect, useState } from "react";
import Button from "../components/ButtonQuizz";
import Header from "../components/Header";

// Definición de tipo para las preguntas
type Question = {
  question: string;
  options: string[];
  answer: string;
};

// Propiedades del componente Quiz
type QuizProps = {
  category: string;
};

// Componente Quiz
const Quiz: React.FC<QuizProps> = ({ category }) => {
  // Estado para las preguntas, el índice de la pregunta actual, la opción seleccionada, las respuestas, el estado del cuestionario y el estado de carga
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<
    { selected: string; correct: string }[]
  >([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect para obtener las preguntas al cargar el componente
  useEffect(() => {
    const fetchQuestions = async () => {

      try {
        // Realiza la petición para obtener las preguntas desde la API
        const response = await fetch("/api/questions");
        const data = await response.json();

        // Filtra las preguntas según la categoría seleccionada
        const filteredQuestions =
          data.questions.find(
            (cat: { category: string }) => cat.category === category
          )?.questions || [];

        // Actualiza el estado con las preguntas obtenidas
        setQuestions(filteredQuestions);
        // Inicializa el estado de las respuestas vacias
        setAnswers(
          new Array(filteredQuestions.length).fill({
            selected: "",
            correct: "",
          })
        );
        // Cambia el estado de carga a falso
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };


    // Llama a la función para obtener las preguntas
    fetchQuestions();
  }, [category]); // Se ejecuta cuando cambie la categoría

  // Muestra un mensaje de carga mientras se obtienen las preguntas
  if (loading)
    return <p className="text-center text-lg mt-10">Cargando preguntas...</p>;
  // Si no hay preguntas disponibles para la categoría seleccionada
  if (questions.length === 0)
    return (
      <p className="text-center text-lg mt-10">
        No hay preguntas disponibles para esta categoría.
      </p>
    );

  // Función que maneja la opción seleccionada por el usuario
  const handleSelectOption = (option: string) => {
    // Copia las respuestas actuales para actualizarlas
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = {
      selected: option,
      correct: questions[currentQuestionIndex].answer,
    };
    setAnswers(newAnswers);
    setSelectedOption(option);
  };

  // Función para avanzar a la siguiente pregunta
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      // Avanza al siguiente índice de pregunta
      setCurrentQuestionIndex((prev) => prev + 1);
      // Establece la opción seleccionada para la siguiente pregunta
      setSelectedOption(answers[currentQuestionIndex + 1]?.selected || null);
    } else {
     // Si es la última pregunta, finaliza el cuestionario
      setQuizFinished(true);
    }
  };

  // Función para retroceder a la pregunta anterior
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(answers[currentQuestionIndex - 1]?.selected || null);
    }
  };

  // Si el cuestionario ha terminado, muestra los resultados
  if (quizFinished) {
    // Calcula el número de respuestas correctas
    const correctAnswers = answers.filter(
      (a) => a.selected === a.correct
    ).length;
    return (
      <>
      <Header />
      <div className="flex flex-col items-center justify-center p-6">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-center">
          <h2 className="text-2xl font-semibold mb-6">Resultados</h2>
          <p className="text-lg">
            Puntuación: {correctAnswers} / {questions.length}
          </p>
          <div className="mt-6 text-left">

            {/* Muestra las respuestas y si son correctas o incorrectas */}
            {answers.map((answer, index) => (
              <div key={index} className="mb-4 p-3 border rounded-lg">
                <p className="font-semibold">{questions[index].question}</p>
                <p
                  className={`mt-1 ${
                    answer.selected === answer.correct
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  Tu respuesta: {answer.selected}
                </p>

                {/* Si la respuesta es incorrecta, muestra la respuesta correcta */}
                {answer.selected !== answer.correct && (
                  <p className="text-blue-500">
                    Respuesta correcta: {answer.correct}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Botones para reiniciar o volver al inicio */}
          <Button
            label="Reiniciar"
            onClick={() => {
              setCurrentQuestionIndex(0);
              setQuizFinished(false);
              setSelectedOption(null);
              setAnswers(
                new Array(questions.length).fill({ selected: "", correct: "" })
              );
            }}
          />
          <Button
            label="Ir al inicio"
            onClick={() => {
              window.location.href = "/temas";
            }}
          />
        </div>
      </div>
      </>

    );  
  }

  // Si el cuestionario no ha terminado, muestra la pregunta actual
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
    <Header />

    <div className="flex flex-col items-center justify-center   p-6">
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-center">
        <h2 className="text-2xl font-semibold mb-6">
          {currentQuestion.question}
        </h2>
        <div className="grid grid-cols-1 gap-4">

          {/* Muestra las opciones de la pregunta */}
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`p-3 rounded-lg border transition-all text-lg ${
                selectedOption === option
                  ? option === currentQuestion.answer
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Botones para navegar entre preguntas */}
        <div className="flex justify-between mt-6">
          <Button
            label="Anterior"
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
          />
          <Button label="Siguiente" onClick={handleNext} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Quiz;