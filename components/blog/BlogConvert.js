import React from 'react';
import parse, { domToReact } from 'html-react-parser';

const BlogConvert = ({ jsonContent }) => {
  // Parse the content and handle className attributes
  const content = parse(jsonContent, {
    replace: (domNode) => {
      // If the element contains a class attribute (for Tailwind)
      if (domNode.attribs && domNode.attribs.class) {
        return (
          <domNode.name
            {...domNode.attribs}
            className={domNode.attribs.class}  // Pass className for Tailwind
          >
            {domToReact(domNode.children)}
          </domNode.name>
        );
      }
    }
  });

  return <div>{content}</div>;
};

export default BlogConvert;
