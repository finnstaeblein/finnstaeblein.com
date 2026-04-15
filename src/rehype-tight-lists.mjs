import { visit } from 'unist-util-visit';

export default function rehypeTightLists() {
  return (tree) => {
    // 1. Unwrap <p> inside <li> to prevent "loose list" extra spacing
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

    // 2. Convert single newlines in text to <br> (like remark-breaks)
    visit(tree, 'element', (node) => {
      if (!node.children) return;

      const result = [];
      let changed = false;

      for (const child of node.children) {
        if (child.type !== 'text' || !child.value.includes('\n')) {
          result.push(child);
          continue;
        }

        changed = true;
        const parts = child.value.split('\n');
        parts.forEach((part, i) => {
          if (part) result.push({ type: 'text', value: part });
          if (i < parts.length - 1) {
            result.push({ type: 'element', tagName: 'br', properties: {}, children: [] });
          }
        });
      }

      if (changed) node.children = result;
    });
  };
}
