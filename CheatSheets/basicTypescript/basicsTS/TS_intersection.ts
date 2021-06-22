// This is essentially what the the intersection types do, they mix an N number of types to create a new one, so long as they are compatible.
// In TypeScript, an intersection type is simply a mix (more commonly referred to as a mixin) between two or more types.
// Note however, that this does not mean that you can freely use intersection types anywhere. For example, this simple declaration will make the compiler throw an error:

// let stringAndNumber: string & number = 5; // throw error
