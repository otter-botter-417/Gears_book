const categoryList = [
    [
        { categoryName: 'テント', url: 'http://localhost:3000/'},
        { categoryName: 'ドームテント', url: 'http://localhost:3000/'},
        { categoryName: 'ティピーテント', url: 'http://localhost:3000/'},
        { categoryName: 'パップテント', url: 'http://localhost:3000/'},
        { categoryName: 'ワンポールテント', url: 'http://localhost:3000/'},
        { categoryName: 'ツールームテント', url: 'http://localhost:3000/'},
        { categoryName: 'ロッジテント', url: 'http://localhost:3000/'},
        { categoryName: 'トンネルテント', url: 'http://localhost:3000/'},
        { categoryName: 'その他', url: 'http://localhost:3000/'}
    ],

    [
        { categoryName: 'タープ', url: 'http://localhost:3000/'},
        { categoryName: 'ヘキサタープ', url: 'http://localhost:3000/'},
        { categoryName: 'ウィングタープ', url: 'http://localhost:3000/'},
        { categoryName: 'レクタタープ', url: 'http://localhost:3000/'}
    ]
]

const ConsoleList = () => {
    return (   // すべてのリスト
        <div>
          {categoryList.map((categories, i) => (
            <div key={i}>
              {categories.map((category) => (
                <div key={category.categoryName}>
                  <a href={category.url}>{category.categoryName}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
    );
};

export default ConsoleList;



// <a href="http://localhost:3000/">テント</a>
// const CategoryLinkList = () => {
//     return (
//         <div>
//            <h1>カテゴリーから選ぶ</h1>
//            {categoryLists.map(categoryLists => {
//             return (
//                 <div key={categoryLists.categoryName}>
//                     <a href={categoryLists.url}>{categoryLists.categoryName}</a>
//                 </div>
//            )})};
//         </div>
//     );
// };


  
// export default CategoryLinkList;
