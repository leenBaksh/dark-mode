export default function VideoSection(props){
  return (
<>
<div className="boundary">
  <h1 className={props.DarkMode ? 'dark' : 'light'}>Video Section</h1>
  <player/>
  </div>
</>
  );
}