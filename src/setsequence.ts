export function setsequence(requiredSeq: any[], seqIget: any[], searchKey: any) {
    var finalResult: any[]=[];
    var j=0;
    for(j; j<requiredSeq.length; j++)
    {
        var i=0;
        for(i;i<requiredSeq.length; i++)
        {
            if(requiredSeq[j][searchKey] == seqIget[i][searchKey])
            {
                finalResult[j] = seqIget[i];
            }
        }
    }
    return finalResult;
}
