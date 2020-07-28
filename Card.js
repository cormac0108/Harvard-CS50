
import React from 'react';

// instead of the class way we will build a function. 

// const Card = (props) => {
//     return (
//         <div classNAme='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p> {props.email} </p>
//             </div>
        
//         </div>
//     );
// }

// a cleaner way

// const Card = (props) => {
//     const {name, email, id} = props;
//     return (
//         <div classNAme='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
//             <div>
//                 <h2>{name}</h2>
//                 <p> {email} </p>
//             </div>
        
//         </div>
//     );

//even cleaner

const Card = ({name, email, id}) => {
    return (
        <div classNAme='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p> {email} </p>
            </div>
        
        </div>
    );



export default Card;