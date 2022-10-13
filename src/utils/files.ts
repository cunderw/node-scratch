import fs from 'fs-extra'
import { logger } from '../utils/logger'

export const getDirectories = async (path: string) => {
  const filesAndDirectories = await fs.readdir(path)
  const directories = []

  await Promise.all(
    filesAndDirectories.map(async name => {
      const stat = await fs.stat(path + name)
      if (stat.isDirectory()) directories.push(name)
    }),
  )

  return directories
}
