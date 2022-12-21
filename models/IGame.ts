export interface IGame{
    gameLink:string;
    gameImage:string;
    gameTitle:string;
    gameSlug:string;
    gameReleased:string;
    gamePublisher:string;

    guide:{
        sectionData:SectionData[];
    }
}

interface SectionData{

    sectionTitle:string;
    sectionImage:string;
    sectionChapter:SectionChapter[];
}

interface SectionChapter{

    chapterHeader:string;
    chapterPaths:ChapterPaths[];
}

interface ChapterPaths{

    chapterLink:string;
    articleData:ArticleData;
}

interface ArticleData{
    
    sectionTitle_bc:string;
    chapterHeader_bc:string;
    chapterTitle_bc:string;
    slugifiedUrl:string;
    chapterContent:ChapterContent[];
}

interface ChapterContent{
    content?:string;
    head?:string;
    image?:string;
    li?:string;
    aside?:string;
}