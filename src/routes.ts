import http from 'http';

export default interface Route {
    path: string
    resolve: (
        req: http.IncomingMessage,
        res: http.ServerResponse
    ) => void
}

type Routes = Route[]

const routes: Routes = [
    {
        path: '/user/description',
        resolve(req,res){
            res.writeHead(200,{ 'content-Type': 'application/json'})
            res.write('User: Cinthia')
            res.end()
        }
    },
    {
        path: '/user/list',
        resolve(req,res){
            res.writeHead(200,{ 'content-Type': 'application/json'})
            res.write(
                JSON.stringify([
                    {
                        nickname: 'cmaldonado', active: true
                    },
                    {
                        nickname: 'cinthiam', active: true
                    }
                ])
            )
            res.end()
        }

    }
]

export const getRoute = (path: string): Route | undefined => 
    routes.find((route: Route) => route.path === path)

export const notFound = (
    req: http.IncomingMessage,
    res: http.ServerResponse
    ): void => {
        res.writeHead(404,{ 'content-Type': 'Text/plain'})
        res.end('Route not found')
    }