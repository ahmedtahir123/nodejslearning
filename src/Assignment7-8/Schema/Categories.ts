
import mongoose from 'mongoose';


interface CategoryDoc extends mongoose.Document {
    name: string;
    description?: string;
  }
  

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String
  });

const Category = mongoose.model<CategoryDoc>('Category', categorySchema);

export default  Category;