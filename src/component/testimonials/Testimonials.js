import "./testimonials.css"

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tyla Laura Seethal",
      title: "Co-Founder of WATER",
      img:
        "https://www.ubetoo.com/wp-content/uploads/2021/02/tyla-seethal-biography-real-name-age-trivia-boyfriend-net-worth-contact-details-2021-02-10_14-56-06_477811-ubetoo.jpg",
      desc:
        "Angeline has consistently proven to be an invaluable teammate throughout our academic journey, especially in various hackathons and competitions over the past 3 years.",
    },
    {
      id: 2,
      name: "Melvin Jangga",
      title: "Software Engineer of PDSB",
      img:
        "https://media.licdn.com/dms/image/D5603AQHhKCucXqoyVQ/profile-displayphoto-shrink_800_800/0/1680742823324?e=1706140800&v=beta&t=e7rKo2gZIbFuMjpafUgVj-gWhvw250GVlaIHoWAQUVc",
      desc:
        "What truly stands out about Angeline is her unwavering passion and meticulous attention to detail. She takes the time to thoroughly review our team's work before finalizing it, ensuring that errors are minimized and the quality of our work is up to a high standard. ",
      featured: true,
    },
    {
      id: 3,
      name: "Diana Febrina Lumbantoruan",
      title: "iOS Engineer of Pandai",
      img:
        "https://media.licdn.com/dms/image/D4E03AQGed8w7dLQSWQ/profile-displayphoto-shrink_800_800/0/1675139742930?e=1706140800&v=beta&t=QNPDrx-hcTQ-HSPaD5IMDxwjsbhBwC-vk2um_Y0_U9w",
      desc:
        "And because of her, I became interested in learning more about the world of testing.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((data) => (
        <div className={data.featured ? "card featured" : "card"}>
          <div className="top">
            <img 
              src="assets/right-arrow.png" 
              className="left" alt="" 
            />
            <img 
              src={data.img} 
              className="user" 
              alt="" 
            />
          </div>
          <div className="center">{data.desc}</div>
          <div className="bottom">
            <h3>{data.name}</h3>
            <h4>{data.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials