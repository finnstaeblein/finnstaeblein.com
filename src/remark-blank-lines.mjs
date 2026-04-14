import { visit } from 'unist-util-visit';

export default function remarkBlankLines() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index == null) return;

      // Match two or more consecutive newlines (a blank line in the source)
      const parts = node.value.split(/\n{2,}/);
      if (parts.length <= 1) return;

      const newNodes = [];
      parts.forEach((part, i) => {
        if (part) newNodes.push({ type: 'text', value: part });
        if (i < parts.length - 1) {
          newNodes.push({ type: 'html', value: '<br><br>' });
        }
      });

      parent.children.splice(index, 1, ...newNodes);
    });
  };
}
