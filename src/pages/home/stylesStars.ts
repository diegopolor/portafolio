interface StyleStar {
    bottom?: string
    top?: string;
    right: string;
    animationDuration : string;      
}

export const stars: StyleStar[] = [
    {
        top: '50%',
        right: '30%',
        animationDuration: '4s'   
    },
    {
        top: '10%',
        right: '80%',
        animationDuration: '5s'
    },
    {
        bottom: '20%',
        right: '10%',  
        animationDuration: '6s'
    },
    {
        bottom: '60%',
        right: '90%',
        animationDuration:'4s'
    },
    { 
        top: '20%',
        right: '10%',
        animationDuration: '3s'
    }
]