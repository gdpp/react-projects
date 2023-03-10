import { useState } from 'react';

//Components
import { AddCategory, GifGrid } from './components';

export const App = () => {
    const [categories, setCategories] = useState(['Anya Forger']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }

        setCategories([newCategory, ...categories]);
    };

    return (
        <div>
            <h1>App Component</h1>

            <AddCategory
                onNewCategory={onAddCategory}
                categories={categories}
            />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </div>
    );
};
