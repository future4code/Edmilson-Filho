import { task } from '../../business/entities/task';

export function toTaskModel(obj: object): task {
    return {
        id: obj.id,
        authorId: obj.author_id,
        deadline: obj.deadline,
        description: obj.description,
        title: obj.title
    }
}