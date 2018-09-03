console.log('app.js is running');

// JSX - JavaScript XML

const appInfo = {
  title : 'Indecision App',
  subtitle : 'This is a training course',
  options : ['London', 'LA', 'NYC', 'Reykjavik']
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option){
    appInfo.options.push(option);
    e.target.elements.option.value = '';
    reRender();
  }
};

const wipeArray = () => {
  appInfo.options = [];
  reRender();
}

const onMakeDecision = () => {
  const rand = Math.floor(Math.random() * appInfo.options.length);
  const option = appInfo.options[rand];
  alert(option);
}

const isEmpty = (lis) => {
  if(lis.length > 0)
    return false;
    
  return true;
}

const appRoot = document.getElementById('app');

const reRender = () => {
  const template = (
    <div>
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
      <p>{appInfo.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={isEmpty(appInfo.options)}onClick={onMakeDecision}>What should I do</button>
      <button onClick={wipeArray}>Remove All</button>
      <ol>
      {
        appInfo.options.length > 0 && 
        appInfo.options.map((o) => {
          return <li key={o} text='Location'>Location: {o}</li>
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
      
    </div>
  );
  ReactDOM.render(template, appRoot);
}

reRender();


