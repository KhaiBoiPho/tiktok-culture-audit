// TikTok Culture Audit — nội dung dự án
// Chương 6: Vấn đề dân tộc và tôn giáo

export const pillars = [
  {
    id: '01',
    key: 'Học mà chơi',
    title: 'Gamification & Edutainment',
    body: 'Lồng ghép kiến thức lịch sử, văn hóa vào các trò chơi, câu đố tương tác hoặc các tình huống diễn xuất (skits) hài hước.',
  },
  {
    id: '02',
    key: 'Thị giác mãn nhãn',
    title: 'Aesthetic & Cinematic Visuals',
    body: 'Tận dụng kỹ thuật quay dựng cinematic, âm thanh xu hướng (trending audio) và phục trang hoành tráng để tạo "visual" cho di sản.',
  },
  {
    id: '03',
    key: 'Hậu trường chân thực',
    title: 'Behind-the-scenes',
    body: 'Mang đến góc nhìn "EGC" về đời sống của các nghệ nhân, làng nghề thủ công hoặc các hội nhóm bảo tồn di sản.',
  },
]

export const audits = [
  {
    no: '01',
    title: 'Kể chuyện lịch sử bằng video ngắn',
    type: 'Lịch sử · Giáo dục · Storytelling',
    tell: 'Creator chọn một nhân vật, sự kiện hoặc câu nói lịch sử, sau đó kể lại bằng giọng văn ngắn gọn, cảm xúc và dễ hiểu.',
    hook: 'Nội dung đánh vào sự tò mò và niềm tự hào dân tộc. Nhịp dựng nhanh, hình ảnh minh họa rõ, giọng kể giàu cảm xúc.',
    value: 'Giúp lịch sử trở nên gần gũi hơn với người trẻ.',
    risk: 'Nếu bị đơn giản hóa quá mức, người xem có thể hiểu chưa đầy đủ hoặc hiểu sai bối cảnh lịch sử.',
    insight: 'TikTok khiến lịch sử không còn là nội dung chỉ để học thuộc, mà trở thành câu chuyện có thể xem, cảm nhận và chia sẻ.',
    quote: 'Dù phải đốt cháy cả dãy Trường Sơn, cũng phải dành cho được độc lập dân tộc…',
    quoteBy: 'Hồ Chí Minh',
    examples: [
      { label: 'Tuổi trẻ và bài học lịch sử Việt Nam' },
    ],
  },
  {
    no: '02',
    title: 'Việt phục và thời trang truyền thống',
    type: 'Thời trang · Bản sắc · Lifestyle',
    tell: 'Creator mặc áo dài, Việt phục hoặc trang phục lấy cảm hứng truyền thống trong bối cảnh hiện đại: đi phố, chụp ảnh, dự sự kiện, video biến hình.',
    hook: 'Hình ảnh đẹp, dễ viral, tạo cảm giác tự hào và mới mẻ.',
    value: 'Đưa trang phục truyền thống trở lại đời sống thường ngày, không chỉ trong lễ hội hay dịp đặc biệt.',
    risk: 'Một số nội dung chú trọng hình ảnh mà thiếu giải thích về nguồn gốc, ý nghĩa và bối cảnh văn hóa.',
    insight: 'Khi truyền thống được mặc lên người trẻ, bản sắc dân tộc trở thành một phần của phong cách sống.',
    examples: [
      { label: '@mid_lee', url: 'https://www.tiktok.com/@mid_lee/video/7461504084621774088' },
      { label: '@1h.studio2', url: 'https://www.tiktok.com/@1h.studio2/video/7479689281246678279' },
      { label: '@huanda.official', url: 'https://www.tiktok.com/@huanda.official/video/7552893779204738312' },
    ],
  },
  {
    no: '03',
    title: 'Âm nhạc dân gian được làm mới',
    type: 'Âm nhạc · Biểu diễn · Remix',
    tell: 'Creator dùng chất liệu dân gian — cải lương, chèo, tuồng, quan họ, nhạc cụ dân tộc — rồi phối lại theo phong cách hiện đại: remix, lo-fi, rap, pop.',
    hook: 'Âm thanh quen mà lạ, dễ tạo trend và dễ dùng làm nhạc nền cho nhiều video khác.',
    value: 'Giúp âm nhạc truyền thống tiếp cận nhóm khán giả trẻ vốn ít nghe nghệ thuật cổ truyền.',
    risk: 'Remix quá mạnh có thể khiến ý nghĩa ban đầu bị mờ đi hoặc mất tính trang trọng của nghệ thuật truyền thống.',
    insight: 'Âm nhạc dân gian không đứng ngoài xu hướng — nó có thể trở thành chất liệu sáng tạo mới nếu được làm lại một cách tôn trọng.',
    examples: [
      { label: 'Chèo — tiếng lòng dân gian vang vọng' },
      { label: 'Chầu văn Cô Đôi Thượng Ngàn' },
      { label: 'Di sản Thực hành Then' },
      { label: 'Phương Mỹ Chi' },
    ],
  },
  {
    no: '04',
    title: 'Ẩm thực truyền thống và văn hóa vùng miền',
    type: 'Ẩm thực · Đời sống · Địa phương',
    tell: 'Creator giới thiệu món ăn truyền thống, món ngày Tết, đặc sản địa phương hoặc câu chuyện văn hóa phía sau một món ăn.',
    hook: 'Hình ảnh món ăn gần gũi, dễ tạo cảm xúc, dễ gợi ký ức gia đình và quê hương.',
    value: 'Văn hóa dân tộc không chỉ nằm ở di tích hay lễ hội, mà còn trong bữa ăn, cách nấu, cách ăn và ký ức cộng đồng.',
    risk: 'Một số video thương mại hóa món ăn quá mức, biến văn hóa thành nội dung review đơn thuần.',
    insight: 'Ẩm thực là con đường gần nhất để người trẻ chạm vào bản sắc văn hóa dân tộc.',
    examples: [
      { label: 'Chợ phiên Mèo Vạc — Hà Giang' },
      { label: 'Gói bánh chưng, bánh tét' },
      { label: 'Bánh tò te của người Tày' },
      { label: 'Ẩm thực Cố Đô' },
      { label: 'Làng mắm Nam Ô — Đà Nẵng' },
    ],
  },
  {
    no: '05',
    title: 'Làng nghề và nghệ nhân truyền thống',
    type: 'Làng nghề · Thủ công · Documentary ngắn',
    tell: 'Creator ghi lại quá trình làm gốm, dệt vải, làm nón, tranh dân gian, nhạc cụ hoặc các sản phẩm thủ công truyền thống.',
    hook: 'Tính chân thực cao, tạo cảm giác "được tận mắt chứng kiến" quá trình lao động của nghệ nhân.',
    value: 'Văn hóa không chỉ là biểu tượng, mà còn là kỹ năng, lao động, ký ức và truyền nghề qua nhiều thế hệ.',
    risk: 'Nếu chỉ quay đẹp mà không giải thích bối cảnh, người xem chỉ thấy nội dung thẩm mỹ mà chưa hiểu giá trị văn hóa sâu hơn.',
    insight: 'TikTok có thể biến làng nghề truyền thống thành một "bảo tàng sống" trên không gian số.',
    examples: [
      { label: 'Làng đúc lư đồng An Hội' },
      { label: 'Lanh Lùng Tám' },
      { label: 'Gốm sứ Bát Tràng' },
      { label: 'Gốm Nam Phong' },
    ],
  },
]

export const bonus = {
  no: '06',
  title: 'Văn hóa dân tộc trong thời đại số',
  type: 'Công nghệ · Văn hóa · Giáo dục số',
  tell: 'Creator giới thiệu cách AI, thực tế ảo (VR), bảo tàng số hoặc số hóa di sản giúp lưu giữ và lan tỏa văn hóa truyền thống đến giới trẻ.',
  hook: 'Nội dung mới lạ, trực quan, kết hợp giữa công nghệ hiện đại và giá trị truyền thống.',
  value: 'Di sản và văn hóa dân tộc được tiếp cận rộng rãi hơn, đặc biệt với thế hệ trẻ trên nền tảng số.',
  risk: 'Nếu lạm dụng hiệu ứng hoặc AI, nội dung có thể làm sai lệch hoặc giảm tính chân thực của di sản.',
  insight: 'Công nghệ không thay thế văn hóa truyền thống, mà giúp văn hóa được gìn giữ và lan tỏa mạnh mẽ hơn trong thời đại số.',
  examples: [
    { label: 'Đại Nội Huế phục dựng 3D' },
    { label: 'Cố đô Huế — công nghệ 3D bảo tồn di sản' },
    { label: 'Kiến trúc Hoàng cung Thăng Long' },
    { label: 'Việt Nam — video phác họa bằng AI' },
    { label: 'Bảo vật quốc gia — AR/VR' },
  ],
}

export const viralFactors = [
  'Mở đầu gây tò mò trong 3 giây đầu',
  'Hình ảnh đẹp hoặc khác biệt',
  'Âm thanh bắt tai',
  'Nội dung ngắn, dễ hiểu',
  'Câu chuyện có cảm xúc',
  'Chủ đề gợi tranh luận hoặc niềm tự hào',
  'Bình luận cao do người xem muốn chia sẻ quan điểm',
]

export const insights = [
  {
    no: '01',
    title: 'Văn hóa truyền thống đang được trẻ hóa',
    body: 'TikTok giúp văn hóa truyền thống thoát khỏi hình ảnh khô cứng, trở nên gần gũi hơn với đời sống người trẻ.',
  },
  {
    no: '02',
    title: 'Bản sắc dân tộc được thể hiện bằng ngôn ngữ mới',
    body: 'Thay vì chỉ xuất hiện qua sách vở hay nghi lễ, bản sắc nay được thể hiện qua video ngắn, trend, âm nhạc, thời trang, ẩm thực và storytelling.',
  },
  {
    no: '03',
    title: 'Người trẻ không chỉ tiếp nhận mà còn kể lại văn hóa',
    body: 'Gen Z đóng vai trò như những "đại sứ văn hóa số" — vừa học hỏi, vừa sáng tạo, vừa lan tỏa giá trị truyền thống đến cộng đồng.',
  },
  {
    no: '04',
    title: 'Thuật toán giúp lan nhanh nhưng tạo áp lực đơn giản hóa',
    body: 'Để viral, nội dung thường phải ngắn, hấp dẫn, dễ hiểu — tiếp cận nhiều người hơn nhưng có thể mất chiều sâu nếu creator thiếu nghiên cứu.',
  },
  {
    no: '05',
    title: 'Văn hóa truyền thống không đứng yên',
    body: 'Văn hóa không chỉ cần bảo tồn nguyên trạng, mà còn là nguồn chất liệu sống động thích nghi với thời đại — miễn là vẫn tôn trọng giá trị cốt lõi.',
  },
]
