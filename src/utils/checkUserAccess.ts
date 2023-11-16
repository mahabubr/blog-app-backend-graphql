export const checkUserAccess = async (
  prisma: {
    user: { findUnique: (arg0: { where: { id: any } }) => any };
    post: { findUnique: (arg0: { where: { id: number } }) => any };
  },
  userId: number,
  postId: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return {
      userError: "User not found",
      post: null,
    };
  }

  const post = await prisma.post.findUnique({
    where: {
      id: Number(postId),
    },
  });

  if (!post) {
    return {
      userError: "Post not found",
      post: null,
    };
  }

  if (post.authorId !== user.id) {
    return {
      userError: "Post not owned by user",
      post: null,
    };
  }
};
