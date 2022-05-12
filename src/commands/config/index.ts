import {Command} from '@oclif/core'
import * as fs from 'fs-extra'

import {CONFIG_PATH} from '../../helpers/config'

export default class Config extends Command {
  static aliases = ['config:list']
  static description = 'Display the current configuration';

  static examples = [
    '$ oex config',
  ]

  static flags = {}
  static args = []

  async run(): Promise<void> {
    this.log('Configurations')
    const exists = await fs.pathExists(CONFIG_PATH)

    if (!exists) {
      this.error('No configurations found', {suggestions: ['oex config set']})
    }

    const configs = await fs.readJSON(CONFIG_PATH)
    this.log(configs)
  }
}
