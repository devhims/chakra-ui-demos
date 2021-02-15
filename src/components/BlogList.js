import BlogDrawer from './BlogDrawer';
import { Box, Stack, Text } from '@chakra-ui/react';

const blogs = [
  {
    title: 'React',
    body:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, adipisci?',
  },
  {
    title: 'Javascript ES6',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est molestiae enim magni, ipsum fugiat?',
  },
  {
    title: 'HTML and CSS',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A rem, nulla explicabo accusantium in autem atque. Deleniti iusto nesciunt architecto!',
  },
];

const BlogList = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      {blogs.map((blog, index) => {
        return (
          <BlogDrawer key={index} trigger={blog.title} content={blog.body} />
        );
      })}
    </Stack>
  );
};

export default BlogList;
