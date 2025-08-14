import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CreateWorkspace from './CreateWorkspace';
import CreateRubric from './CreateRubric';
import EvaluateVideo from './EvaluateVideo';

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />}/>
                <Route path={"/create-workspace"} element={<CreateWorkspace />}/>
                <Route path={"/create-rubric"} element={<CreateRubric />}/>
                <Route path={"/evaluate-video"} element={<EvaluateVideo />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;