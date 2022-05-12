import {Command, Flags} from '@oclif/core'

import {configExists} from '../../helpers/config'

export default class Transfer extends Command {
  static description = 'Transfer data';

  static examples = [
    `$ oex transfer --from src --to dest
Transferring data from src to dest...
`,
  ];

  static flags = {
    from: Flags.string({
      char: 'f',
      description: 'Source directory',
      required: true,
    }),
    to: Flags.string({
      char: 't',
      description: 'Destination directory',
      required: true,
    }),
  };

  static args = [];

  async run(): Promise<void> {
    const {flags} = await this.parse(Transfer)

    const config = await configExists()
    if (!config) {
      this.error('No configuration found', {suggestions: ['oex transfer config set']})
    }

    this.log(`Transferring data from ${flags.from} to ${flags.to}...`)
  }
}
