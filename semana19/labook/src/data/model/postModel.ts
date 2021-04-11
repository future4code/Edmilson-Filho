import { post } from '../../business/entities/post';

export function toPostModel(obj: any): post {
    return {
        id: obj.id,
        photo: obj.photo,
        descricao: obj.descricao,
        created_at: obj.created_at,
        type: obj.type
    }
}