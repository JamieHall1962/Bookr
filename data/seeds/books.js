
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert(
        [{
          "id": 1,
          "title": "A guide to Western historical scripts from antiquity to 1600",
          "author": "Michelle P. Brown",
          "publisher": "University of Toronto Press",
          "image_url": "http://books.google.com/books/content?id=ptkHujKjIj0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
          "detailed_desc": "quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus"
        }, {
          "id": 2,
          "title": "Mechanical and Electrical Equipment for Buildings",
          "author": " Benjamin Stein, John S. Reynolds, Alison G. Kwok and Walter T. Grondzik",
          "publisher": "Wiley & Sons, Incorporated, John",
          "image_url": "https://books.google.com/books/content?id=ZIdvdyPMhI8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
          "detailed_desc": "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue"
        }, {
          "id": 3,
          "title": "Mechanical Man: John B. Watson and the Beginnings of Behaviorism ",
          "author": "Kerry W. Buckley",
          "publisher": "The Guilford Pres",
          "image_url": "https://books.google.com/books/content?id=0XjIkQziFe8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur",
          "detailed_desc": "proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna"
        }, {
          "id": 4,
          "title": "The Mechanical",
          "author":  "Ian Tregillis",
          "publisher": "Orbit",
          "image_url": "https://books.google.com/books/content?id=oliYAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
          "detailed_desc": "amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium"
        }, {
          "id": 5,
          "title": "Mechanical Response of Polymers: An Introduction",
          "author": "Alan S. Wineman, K. R. Rajagopal",
          "publisher": "The Press Syndicate of the University of Cambridge",
          "image_url": "https://books.google.com/books/content?id=-FNES-_cowIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum",
          "detailed_desc": "a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est"
        }, {
          "id": 6,
          "title": "Electrical and Electronics Engineering",
          "author": "Adolpho Irdale",
          "publisher": "Christiansen-Runolfsson",
          "image_url": "https://books.google.com/books/content?id=9zePYs9v6QsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
          "detailed_desc": "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae"
        }, {
          "id": 7,
          "title": "The Electrical Nature of Storms",
          "author": "D. R. MacGorman, W. David Rust",
          "publisher": "Oxford University Press",
          "image_url": "https://books.google.com/books/content?id=_NbHNj7KJecC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
          "detailed_desc": "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et"
        }, {
          "id": 8,
          "title": "Electrical Machine Design Data Book",
          "author": "A. Shanmugasundaram",
          "publisher": "New Age International Publishers",
          "image_url": "https://books.google.com/books/content?id=cevD-ym1230C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
          "detailed_desc": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo"
        }, {
          "id": 9,
          "title": "A Textbook of Design of Electrical Installations",
          "author": "V. K. Jain, Amitabh Bajaj ",
          "publisher": "Laxmi Publications",
          "image_url": "https://books.google.com/books/content?id=yTypGmVTx6cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac",
          "detailed_desc": "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis"
        }, {
          "id": 10,
          "title": "Electrical Safety a guide to the causes and prevention of electrical hazards",
          "author": "J. Maxwell Adams",
          "publisher": "The Institution of Engineering and Technology",
          "image_url": "https://books.google.com/books/content?id=R9bIF7O4mbwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
          "detailed_desc": "interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean"
        }, {
          "id": 11,
          "title": "Electrical Contacts",
          "author": "Paul G. Slade",
          "publisher": "CRC Press",
          "image_url": "https://books.google.com/books/content?id=EkStW7v8VPkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc",
          "detailed_desc": "augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor"
        }, {
          "id": 12,
          "title": "Electrical Engineering Materials",
          "author": " Amaresh Choudhury",
          "publisher": "WALNUT PUBLICATION",
          "image_url": "https://books.google.com/books/content?id=tw9JrCbaPFoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci",
          "detailed_desc": "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus"
        }, {
          "id": 13,
          "title": "Electrical Power Distribution Systems",
          "author": "V. Kamaraju",
          "publisher": "Mc Graw Hill India",
          "image_url": "https://books.google.com/books/content?id=Zzl6CfZA6XsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "a odio in hac habitasse platea dictumst maecenas ut massa",
          "detailed_desc": "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero"
        }, {
          "id": 14,
          "title": "The Electrical Engineering Handbook",
          "author": "Richard C. Dorf",
          "publisher": "CRC Press",
          "image_url": "https://books.google.com/books/content?id=qP7HvuakLgEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales",
          "detailed_desc": "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus"
        }, {
          "id": 15,
          "title": "Electrical Installation Theory and Practice",
          "author": " E. L. Donnelly",
          "publisher": "Oxford University Press",
          "image_url": "https://books.google.com/books/content?id=WMiT1hcRwDAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus",
          "detailed_desc": "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis"
        }, {
          "id": 16,
          "title": "The Structure of the World: Metaphysics and Representation",
          "author": "Steven French",
          "publisher": "Oxford University Press",
          "image_url": "https://books.google.com/books/content?id=aTjnAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "brief_desc": "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur",
          "detailed_desc": "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia"
        }]
        
      );
    });
};
