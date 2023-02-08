import "./mainStyles.css";

interface CardProps {
  title: string;
  description: string;
}

export const MainCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div
      className="mainCard
     flex flex-col wave
      w-60 p-5 border-2 rounded-2xl border-slate-600 gap-3 itens-center justify-center     
      "
    >
      <h2 className="text-white font-bold text-xl">{title}</h2>
      <p className="text-white font-thin text-sm text-slate-300 text-left">
        {description}
      </p>
    </div>
  );
};
