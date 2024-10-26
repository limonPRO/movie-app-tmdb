

type LoadingSpinnerProps = {
  width: number | string;
  height: number | string;
  color: string;
};

const LoadingSpinner = () => {
  return (
    <div className="w-full p-5 flex justify-center items-center">
    <p>lo..............</p>
    </div>
  );
};

export default LoadingSpinner;