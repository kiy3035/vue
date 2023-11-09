const express = require("express");
const cors = require("cors"); // cors 모듈 추가
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const oracledb = require("oracledb"); // Oracle 데이터베이스 드라이버

const app = express();
const port = 3000;

// Oracle 데이터베이스 연결 설정
oracledb.initOracleClient({ libDir: "C:\\oraclexe\\app\\oracle\\product\\11.2.0\\server\\bin" });

// CORS 설정
app.use(cors()); // 모든 출처에서의 요청 허용 (보안 설정 필요)

async function connectToDatabase() {
  try {
    const connection = await oracledb.getConnection({
      user: "DWLG", // Oracle 사용자 이름
      password: "DWLG01", // Oracle 비밀번호
      connectString: "jdbc:log4jdbc:oracle:thin:@103.129.187.74:1521:PKWMS", // Oracle 서비스 이름 또는 SID
    });
    return connection;
  } catch (error) {
    console.error("Oracle 데이터베이스 연결 오류:", error);
    return null;
  }
}

// 동영상 모델
const Video = {
  insert: async (connection, title, description, videoPath) => {
    // const sql = "INSERT INTO TEST_VUE (TITLE, PATH, TYPE) VALUES (:title, :description, :videoPath";
    const sql = "INSERT INTO TEST_VUE (TITLE, PATH, TYPE) VALUES ('TEST', 'TEST2', 'TEST3')";
    const binds = {
      title: title,
      description: description,
      videoPath: videoPath,
    };
    const options = { autoCommit: true };

    try {
      await connection.execute(sql, binds, options);
      return true;
    } catch (error) {
      console.error("동영상 정보 저장 오류:", error);
      return false;
    }
  },
};

// 업로드된 파일을 저장할 디렉토리
const uploadDir = path.join(__dirname, "uploads");

// 파일 업로드를 위한 Multer 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// 데이터 파싱을 위한 Body Parser 설정
app.use(bodyParser.json());

// 정적 파일 서빙 (업로드된 동영상을 클라이언트에서 제공)
app.use("/uploads", express.static(uploadDir));

// 동영상 업로드 API 엔드포인트
app.post("/upload", upload.single("video"), async (req, res) => {
  const { title, description } = req.body;
  const videoPath = req.file.filename;

  // Oracle 데이터베이스 연결
  const connection = await connectToDatabase();
  if (connection) {
    const success = await Video.insert(connection, title, description, videoPath);
    if (success) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: "동영상 업로드 실패" });
    }
    connection.close();
  } else {
    res.status(500).json({ error: "Oracle 데이터베이스 연결 실패" });
  }
});

// 동영상 목록 API 엔드포인트
app.get("/upload", async (req, res) => {
  // Oracle 데이터베이스에서 동영상 목록 조회를 구현해야 합니다.
  // 이 부분은 Oracle 데이터베이스와 연동하여 SQL 쿼리로 구현됩니다.

  res.json([]); // 조회된 동영상 목록을 반환
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
