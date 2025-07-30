export function SnapShot(props) {
     return (
    <div className="relative w-96 h-56 rounded-xl overflow-hidden shadow-lg">
      <img
        src={props.image} 
        alt="Resume Wizard"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}