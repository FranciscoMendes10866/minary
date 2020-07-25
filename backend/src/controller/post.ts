// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Post from '../entity/Post'

class PostController {
  async Store (req: Request, res: Response) {
    const postRepository = getRepository(Post)
    const { category, title, subTitle, description, body } = req.body
    const post = await postRepository.create({
      title,
      subTitle,
      description,
      body,
      category,
      authorId: req.authId,
      authorEmail: req.authEmail,
      authorUsername: req.authUsername
    })
    await postRepository.save(post)
    return res.json(post)
  }

  async Index (req: Request, res: Response) {
    const postRepository = getRepository(Post)
    const post = await postRepository.find()
    return res.json(post)
  }

  async Single (req: Request, res: Response) {
    const postRepository = getRepository(Post)
    const { id } = req.params
    const post = await postRepository.findOne(id)
    return res.json(post)
  }

  async Destroy (req: Request, res: Response) {
    const postRepository = getRepository(Post)
    const { id } = req.params
    await postRepository.delete(id)
    return res.sendStatus(200)
  }
}

export default new PostController()
