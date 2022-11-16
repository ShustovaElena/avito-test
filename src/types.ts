export type IItem = {
    by : string,
    descendants : number,
    id : number,
    kids : number[],
    score : number,
    time : number,
    title : string,
    type : string,
    url : string,
};

export type IComment = {
    by: string,
    id: number,
    kids: number[],
    parent: number,
    text: string,
    time: number,
    type: string,
};

export type CommentType = {
    props: IComment;
    padding: string;
}

export type ICommentsCount = {
    descendants: number;
}

export type IComments = {
    descendants: number;
    kids : number[],
    id: number,
}

export type INestedComment = {
    open: boolean;
    commentValue: IComment;
};