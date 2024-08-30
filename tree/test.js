const { Node } = require('./Index.js');

describe('Node', () => {
	it('should create a new node with the given data', () => {
		// Arrange
		const data = 'test data';

		// Act
		const node = new Node(data);

		// Assert
		expect(node.data).toEqual(data);
		expect(node.children).toEqual([]);
	});

	it('should add a new child node', () => {
		// Arrange
		const node = new Node('parent');
		const childData = 'child';

		// Act
		node.add(childData);

		// Assert
		expect(node.children.length).toEqual(1);
		expect(node.children[0].data).toEqual(childData);
	});

	it('should remove a child node with the specified data', () => {
		// Arrange
		const node = new Node('parent');
		const child1Data = 'child1';
		const child2Data = 'child2';
		node.add(child1Data);
		node.add(child2Data);

		// Act
		node.remove(child1Data);

		// Assert
		expect(node.children.length).toEqual(1);
		expect(node.children[0].data).toEqual(child2Data);
	});

	it('should not remove any child node if the specified data does not exist', () => {
		// Arrange
		const node = new Node('parent');
		const childData = 'child';
		node.add(childData);

		// Act
		node.remove('nonexistent');

		// Assert
		expect(node.children.length).toEqual(1);
		expect(node.children[0].data).toEqual(childData);
	});
});

describe('Tree', () => {
	it('should create a new tree with a null root', () => {
		// Arrange & Act
		const tree = new Tree();

		// Assert
		expect(tree.root).toBeNull();
	});
});
