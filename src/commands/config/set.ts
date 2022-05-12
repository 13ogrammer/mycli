import {Command} from '@oclif/core'
import * as fs from 'fs-extra'

import {CONFIG_PATH} from '../../helpers/config'

export default class ConfigSet extends Command {
  static description = 'Set a new configuration';

  static examples = [
    '$ oex config',
  ]

  static flags = {}
  static args = []

  async run(): Promise<void> {
    this.log('Set configurations')
    await fs.writeJSON(CONFIG_PATH, {test: 'test'})
  }
}
