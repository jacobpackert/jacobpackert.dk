import type { APIRoute } from 'astro';
import { getLikesForPost, likePost } from '../../db';

export const prerender = false;

export const GET: APIRoute = async ({ params, request } ) => {

  if(!params.id) {
    return new Response(
      JSON.stringify({
        error: 'Missing post ID',
      }),
      { status: 400 }
    )
  }


  const postId = parseInt(params.id);

  try {
    const count = await getLikesForPost(postId);
  
    return new Response(
      JSON.stringify({
        count,
      })
    )
  } catch (error) {
    console.error('Error fetching likes:\n', error);
    return new Response(
      JSON.stringify({
        error: 'Error fetching likes',
      }),
      { status: 500 }
    )
  }
}

export const POST: APIRoute = async ({ params, request }) => {

  if(!params.id) {
    return new Response(
      JSON.stringify({
        error: 'Missing post ID',
      }),
      { status: 400 }
    )
  }

  const postId = parseInt(params.id);

  try {
    const response = await likePost(postId);

    return new Response(
      JSON.stringify(response),
      { status: 201 }
    )
  } catch (error) {
    console.error('Error liking post:\n', error);
    return new Response(
      JSON.stringify({
        error: 'Error liking post',
      }),
      { status: 500 }
    )
  }
}
