/**
 * Check if the incoming character is Chinese characters
 * */
function check(char) {
    const testCases=[
        ['\u4E00','\u9FEF'],//基本汉字&基本汉字补充
        ['\u3400','\u4DB5'],//扩展A
        ['\u{20000}','\u{2A6D6}'],//扩展B
        ['\u{2A700}','\u{2B734}'],//扩展C
        ['\u{2B740}','\u{2B81D}'],//扩展D
        ['\u{2B820}','\u{2CEA1}'],//扩展E
        ['\u{2CEB0}','\u{2EBE0}']//扩展F
    ]
    for (const t of testCases){
        if(t[0]<=char&&t[1]>=char){
            return true
        }
    }
    return false
}

function isChineseCharacter(str) {
    if(Object.prototype.toString.call(str) !== '[object String]' ) {
        return false
    }
    /*Check only the first character*/
    for (const char of str) {
        return check(str)
    }
}

function isAllChineseCharacter(str) {
    if(Object.prototype.toString.call(str) !== '[object String]' ) {
        return false
    }
    /*Check all characters*/
    for (const char of str){
        if(!check(char)){
            return false
        }
    }
    return true
}

exports.isChineseCharacter=isChineseCharacter

exports.isAllChineseCharacter=isAllChineseCharacter