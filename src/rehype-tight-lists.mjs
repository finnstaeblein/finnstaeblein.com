import { visit } from 'unist-util-visit';

export default function rehypeTightLists() {
  return (tree) => {
    // Unwrap <p> inside <li> to prevent "loose list" extra spacing
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'li') return;
      const newChildren = [];
      for (const child of node.children) {
        if (child.type === 'element' && child.tagName === 'p') {
          newChildren.push(...child.children);
        } else {
          newChildren.push(child);
        }
      }
      node.children = newChildren;
    });
  };
}
