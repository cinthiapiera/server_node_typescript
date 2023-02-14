import serverbootstrap, {Bootstrap} from "./bootstrap/serverbootstrap";
import ApplicationNode from './app';

const Serverbootstrap: Bootstrap = new serverbootstrap(
    ApplicationNode.requestObservable
)

const startServer = async () => {
    try {
        const resultServer = await Serverbootstrap.initialize()
        console.log(resultServer);
        
    } catch (err) {
        console.log(err);
        
    }
}

startServer()