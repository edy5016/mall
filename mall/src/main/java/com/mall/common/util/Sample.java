
package com.mall.common.util;

import com.mall.common.util.crypto.Hash;

import sun.misc.BASE64Encoder;

/**
 * @설명			: java Test Class 추후 Junit으로 변경 예정  
 * @작성일		: 2016. 12. 14. 오후 8:53:19
 * @작성자		: Myeong-seok(sirosms@gmail.com)
 * @version 	: 12st v1.0
 */

public class Sample {
	
	public static void main(String[] arg) {
		
		String password = "a1234";
		
		password = new BASE64Encoder().encode(Hash.getSHA256(password));
		
		System.out.println(password);
	}

}
