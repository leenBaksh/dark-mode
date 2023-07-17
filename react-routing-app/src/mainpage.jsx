export default function MainPage(props){
  return (
<>
<div className="boundary">
  <h1 className={props.DarkMode ? 'dark' : 'light'}>Main Page</h1>
  </div>
</>
  );
}