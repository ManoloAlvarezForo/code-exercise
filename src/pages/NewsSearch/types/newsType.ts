
export interface ProviderType {
    name: string;
    favIcon: string;
    favIconBase64Encoding: string;
}

export interface NewsImageType {
    url: string; 
    height: number;
    width: number;
    thumbnail: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
    base64Encoding?: number | null;
    name?: string | null;
    title?: string | null;
    provider: ProviderType;
    imageWebSearchUrl?: string | null;
    webpageUrl: string;
}

export interface NewsBaseType {
    id: string;
    title: string;
    url: string;
    description: string;
    body: string;
    snippet: string;
    keywords: string;
    language: string;
    isSafe: boolean;
    datePublished: string;
    provider: ProviderType;
    image: NewsImageType;
}

// export interface NewsBaseType {
//     _type: string;
//     didUMean: string;
//     totalCount: number;
//     relatedSearch: [];
//     value:  NewsValueType[]

// }
  
//   export interface NewssletterRequestParams {
//     limit?: number;
//     order?: string;
//     page?: number;
//     sort?: string;
//     campaignId?: number;
//     excludeOwned?: boolean;
//     excludeShared?: boolean;
//   }
  