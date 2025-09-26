const SkillSticker = ({ icon: Icon, name }) => {
  return (
    <div className="glass rounded-2xl px-4 py-3 flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
      <Icon className="w-8 h-8 text-purple-400 mb-2" />
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default SkillSticker;
