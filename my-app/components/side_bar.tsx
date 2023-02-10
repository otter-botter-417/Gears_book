import React from "react";
import {AppBar} from "@material-ui/core";

const categoryLists = [
    { categoryName: 'テント', url: 'http://localhost:3000/', Child: false},
    { categoryName: 'ドームテント', url: 'http://localhost:3000/', Child: true},
    { categoryName: 'ティピーテント', url: 'http://localhost:3000/', Child: true},
    { categoryName: 'パップテント', url: 'http://localhost:3000/', Child: true},
    { categoryName: 'ワンポールテント', url: 'http://localhost:3000/', Child: true},
    { categoryName: 'ツールームテント', url: 'http://localhost:3000/', url: 'http://localhost:3000/', Child: true},
    { categoryName: 'ロッジテント', url: 'http://localhost:3000/', Child: true},
    { categoryName: 'トンネルテント', url: 'http://localhost:3000/', Child: true},
    { categoryName: 'その他', url: 'http://localhost:3000/', Child: true},
    { categoryName: 'タープ', url: 'http://localhost:3000/', Child: false},
    { categoryName: 'ヘキサタープ', url: 'http://localhost:3000/', Child: true},
    { categoryName: 'ウィングタープ', url: 'http://localhost:3000/', Child: true},
    { categoryName: 'レクタタープ', url: 'http://localhost:3000/', Child: true}
];

<a href="http://localhost:3000/">テント</a>
const CategoryLinkList = () => {
    return (
        <div>
           <h1>カテゴリーから選ぶ</h1>
           {categoryLists.map(categoryLists => {
            return (
                <div key={categoryLists.categoryName}>
                    <a href={categoryLists.url}>{categoryLists.categoryName}</a>
                </div>
           )})};
        </div>
    );
};


  
export default CategoryLinkList;