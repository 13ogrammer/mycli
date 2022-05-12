import {homedir} from 'node:os'
import * as path from 'node:path'
import * as fs from 'fs-extra'

export const CONFIG_PATH = path.join(homedir(), '.mycli')

export const configExists = async (): Promise<boolean>  => {
  return fs.pathExists(CONFIG_PATH)
}
