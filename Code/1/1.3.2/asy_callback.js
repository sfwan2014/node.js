var fs = require("fs");
// �첽��ȡindex.conf�ļ������ڻص������н�ִ�н��data���ص�getFileData������
fs.readFile('index.conf', function (err, data) {
  getFileData(data);
});

// ��ȡdata���ݺ�ִ��setTimeout������ֵһ��󴫵ݵ�returnData��
function getFileData(data){
	setTimeout(returnData(data), 1000);
}

// ��ȡdata���ݣ�����ӡ
function returnData(data){
	console.log(data);
}