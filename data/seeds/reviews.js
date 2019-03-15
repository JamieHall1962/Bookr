exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("reviews")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("reviews").insert([
        {
          id: 75,
          user_id: 1,
          book_id: 1,
          rating: 2,
          review:
            "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut"
        },
        {
          id: 15,
          user_id: 1,
          book_id: 2,
          rating: 2,
          review:
            "ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim"
        },
        {
          id: 84,
          user_id: 1,
          book_id: 3,
          rating: 2,
          review:
            "nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio"
        },
        {
          id: 9,
          user_id: 1,
          book_id: 5,
          rating: 4,
          review:
            "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue"
        },
        {
          id: 29,
          user_id: 1,
          book_id: 7,
          rating: 1,
          review:
            "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis"
        },
        {
          id: 41,
          user_id: 1,
          book_id: 9,
          rating: 1,
          review:
            "in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis"
        },
        {
          id: 11,
          user_id: 1,
          book_id: 11,
          rating: 1,
          review:
            "sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere"
        },
        {
          id: 16,
          user_id: 1,
          book_id: 12,
          rating: 2,
          review:
            "ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis"
        },
        {
          id: 32,
          user_id: 1,
          book_id: 15,
          rating: 2,
          review:
            "rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra"
        },
        {
          id: 21,
          user_id: 1,
          book_id: 16,
          rating: 3,
          review:
            "blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget"
        },
        {
          id: 76,
          user_id: 2,
          book_id: 1,
          rating: 1,
          review:
            "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis"
        },
        {
          id: 36,
          user_id: 2,
          book_id: 2,
          rating: 5,
          review:
            "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan"
        },
        {
          id: 58,
          user_id: 2,
          book_id: 3,
          rating: 3,
          review:
            "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis"
        },
        {
          id: 12,
          user_id: 2,
          book_id: 4,
          rating: 1,
          review:
            "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus"
        },
        {
          id: 80,
          user_id: 2,
          book_id: 10,
          rating: 4,
          review:
            "in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis"
        },
        {
          id: 20,
          user_id: 2,
          book_id: 11,
          rating: 4,
          review:
            "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel"
        },
        {
          id: 96,
          user_id: 2,
          book_id: 12,
          rating: 3,
          review:
            "eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing"
        },
        {
          id: 83,
          user_id: 2,
          book_id: 13,
          rating: 3,
          review:
            "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum"
        },
        {
          id: 3,
          user_id: 2,
          book_id: 14,
          rating: 1,
          review:
            "lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis"
        },
        {
          id: 22,
          user_id: 2,
          book_id: 15,
          rating: 2,
          review:
            "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat"
        },
        {
          id: 97,
          user_id: 2,
          book_id: 16,
          rating: 5,
          review:
            "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis"
        },
        {
          id: 42,
          user_id: 3,
          book_id: 2,
          rating: 2,
          review:
            "molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit"
        },
        {
          id: 25,
          user_id: 3,
          book_id: 3,
          rating: 5,
          review:
            "varius nulla facilisi cras non velit nec nisi vulputate nonummy"
        },
        {
          id: 69,
          user_id: 3,
          book_id: 4,
          rating: 1,
          review:
            "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum"
        },
        {
          id: 71,
          user_id: 3,
          book_id: 5,
          rating: 5,
          review:
            "dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu"
        },
        {
          id: 93,
          user_id: 3,
          book_id: 7,
          rating: 3,
          review:
            "quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse"
        },
        {
          id: 35,
          user_id: 3,
          book_id: 8,
          rating: 4,
          review:
            "mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum"
        },
        {
          id: 40,
          user_id: 3,
          book_id: 9,
          rating: 4,
          review:
            "in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin"
        },
        {
          id: 10,
          user_id: 3,
          book_id: 10,
          rating: 5,
          review:
            "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer"
        },
        {
          id: 86,
          user_id: 3,
          book_id: 11,
          rating: 3,
          review:
            "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare"
        },
        {
          id: 19,
          user_id: 3,
          book_id: 12,
          rating: 1,
          review:
            "eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque"
        },
        {
          id: 39,
          user_id: 3,
          book_id: 13,
          rating: 5,
          review:
            "vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed"
        },
        {
          id: 5,
          user_id: 3,
          book_id: 14,
          rating: 2,
          review:
            "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue"
        },
        {
          id: 33,
          user_id: 3,
          book_id: 15,
          rating: 2,
          review:
            "nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper"
        },
        {
          "id": 18,
          "user_id": 4,
          "book_id": 2,
          "rating": 5,
          "review": "proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan"
        },
        {
          "id": 17,
          "user_id": 4,
          "book_id": 3,
          "rating": 2,
          "review": "libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis"
        },
        {
          "id": 60,
          "user_id": 4,
          "book_id": 4,
          "rating": 2,
          "review": "augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo"
        },
        {
          "id": 55,
          "user_id": 4,
          "book_id": 5,
          "rating": 3,
          "review": "est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis"
        },
        {
          "id": 98,
          "user_id": 4,
          "book_id": 6,
          "rating": 5,
          "review": "aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id"
        },
        {
          "id": 53,
          "user_id": 4,
          "book_id": 7,
          "rating": 5,
          "review": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla"
        },
        {
          "id": 1,
          "user_id": 4,
          "book_id": 8,
          "rating": 3,
          "review": "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat"
        },
        {
          "id": 61,
          "user_id": 4,
          "book_id": 9,
          "rating": 2,
          "review": "tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed"
        },
        {
          "id": 43,
          "user_id": 4,
          "book_id": 10,
          "rating": 2,
          "review": "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in"
        },
        {
          "id": 31,
          "user_id": 4,
          "book_id": 11,
          "rating": 4,
          "review": "ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat"
        },
        {
          "id": 88,
          "user_id": 4,
          "book_id": 12,
          "rating": 5,
          "review": "suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat"
        },
        {
          "id": 63,
          "user_id": 4,
          "book_id": 13,
          "rating": 4,
          "review": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam"
        },
        {
          "id": 2,
          "user_id": 4,
          "book_id": 14,
          "rating": 5,
          "review": "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae"
        },
        {
          "id": 28,
          "user_id": 4,
          "book_id": 15,
          "rating": 2,
          "review": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed"
        },
        {
          "id": 48,
          "user_id": 5,
          "book_id": 1,
          "rating": 4,
          "review": "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis"
        },
        {
          "id": 37,
          "user_id": 5,
          "book_id": 2,
          "rating": 3,
          "review": "ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit"
        },
        {
          "id": 87,
          "user_id": 5,
          "book_id": 3,
          "rating": 5,
          "review": "at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim"
        },
        {
          "id": 49,
          "user_id": 5,
          "book_id": 4,
          "rating": 3,
          "review": "non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut"
        },
        {
          "id": 65,
          "user_id": 5,
          "book_id": 5,
          "rating": 4,
          "review": "augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus"
        },
        {
          "id": 78,
          "user_id": 5,
          "book_id": 6,
          "rating": 1,
          "review": "lacus at velit vivamus vel nulla eget eros elementum pellentesque"
        },
        {
          "id": 82,
          "user_id": 5,
          "book_id": 9,
          "rating": 5,
          "review": "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis"
        },
        {
          "id": 66,
          "user_id": 5,
          "book_id": 10,
          "rating": 5,
          "review": "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia"
        },
        {
          "id": 6,
          "user_id": 5,
          "book_id": 11,
          "rating": 1,
          "review": "eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum"
        },
        {
          "id": 72,
          "user_id": 5,
          "book_id": 12,
          "rating": 4,
          "review": "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque"
        },
        {
          "id": 4,
          "user_id": 5,
          "book_id": 13,
          "rating": 3,
          "review": "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi"
        },
        {
          "id": 26,
          "user_id": 5,
          "book_id": 15,
          "rating": 1,
          "review": "dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget"
        },
        {
          "id": 34,
          "user_id": 5,
          "book_id": 16,
          "rating": 3,
          "review": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod"
        }
      ]);
    });
};
