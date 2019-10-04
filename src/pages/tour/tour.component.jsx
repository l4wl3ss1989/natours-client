import React, { Component } from 'react';

import axios from '../../axios.natours';
import TourHeader from '../../components/tour/tour-header/tour-header.component';
import TourDescription from '../../components/tour/tour-description/tour-description.component';
import TourMap from '../../components/tour/tour-map/tour-map.component';
import TourPictures from '../../components/tour/tour-pictures/tour-pictures.component';
import TourReviews from '../../components/tour/tour-reviews/tour-reviews.component';
import TourCTA from '../../components/tour/tour-cta/tour-cta.component';

class Tour extends Component {
  state = {
    tour: null
  };

  async componentDidMount() {
    if (!this.props.location.state) return this.props.history.push('/');
    const { id, slug } = this.props.location.state;
    document.title = `Natours | ${slug}`;

    try {
      const tour = await axios.get(`/tours/${id}`);
      console.log(tour);
      if (tour.data.status === 'success') this.setState({ tour: tour.data.data.doc });
    } catch (err) {
      console.log('💥', err);
    }
  }

  render() {
    let tour = null;
    if (this.state.tour) {
      const {
        name,
        duration,
        startLocation,
        locations,
        description,
        startDates,
        difficulty,
        maxGroupSize,
        ratingsAverage,
        guides,
        imageCover,
        images,
        reviews
      } = this.state.tour;
      tour = (
        <React.Fragment>
          <TourHeader imageCover={imageCover} name={name} duration={duration} startLocation={startLocation} />
          <TourDescription
            name={name}
            description={description}
            startDates={startDates}
            difficulty={difficulty}
            maxGroupSize={maxGroupSize}
            ratingsAverage={ratingsAverage}
            guides={guides}
          />
          <TourPictures images={images} />
          <TourMap locations={locations} />
          {/*Missing map*/}
          <TourReviews reviews={reviews} />
          <TourCTA duration={duration} images={images} />
        </React.Fragment>
      );
    }
    return tour;
  }
}

export default Tour;

/*   
    <section class="section-map">
      <div id="map"></div>
      <script>
        mapboxgl.accessToken =
          'pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A';

        const geojson = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-112.987418, 37.198125]
              },
              properties: {
                description: 'Zion Canyon National Park'
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-111.376161, 36.86438]
              },
              properties: {
                description: 'Antelope Canyon'
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-112.115763, 36.058973]
              },
              properties: {
                description: 'Grand Canyon National Park'
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-116.107963, 34.011646]
              },
              properties: {
                description: 'Joshua Tree National Park'
              }
            }
          ]
        };

        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/jonasschmedtmann/cjnxfn3zk7bj52rpegdltx58h',
          scrollZoom: false
        });

        const bounds = new mapboxgl.LngLatBounds();

        geojson.features.forEach(function(marker) {
          var el = document.createElement('div');
          el.className = 'marker';

          new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
          })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

          new mapboxgl.Popup({
            offset: 30,
            closeOnClick: false
          })
            .setLngLat(marker.geometry.coordinates)
            .setHTML('<p>' + marker.properties.description + '</p>')
            .addTo(map);

          bounds.extend(marker.geometry.coordinates);
        });

        map.fitBounds(bounds, {
          padding: {
            top: 200,
            bottom: 150,
            left: 50,
            right: 50
          }
        });

        map.on('load', function() {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: [
                    [-112.987418, 37.198125],
                    [-111.376161, 36.86438],
                    [-112.115763, 36.058973],
                    [-116.107963, 34.011646]
                  ]
                }
              }
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#55c57a',
              'line-opacity': 0.6,
              'line-width': 3
            }
          });
        });
      </script>
    </section>

    <section class="section-reviews">
      <div class="reviews">
        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              src="img/users/user-7.jpg"
              alt="Jim Brown"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">Jim Brown</h6>
          </div>
          <p class="reviews__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dignissimos sint quo commodi corrupti accusantium veniam saepe
            numquam.
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              src="img/users/user-14.jpg"
              alt="Laura Wilson"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">Laura Wilson</h6>
          </div>
          <p class="reviews__text">
            Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
            reiciendis provident deleniti cumque similique itaque animi,
            sapiente obcaecati beatae accusantium.
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--inactive">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              src="img/users/user-15.jpg"
              alt="Ben Hadley"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">Ben Hadley</h6>
          </div>
          <p class="reviews__text">
            Debitis, nesciunt itaque! At quis officia natus. Suscipit,
            reprehenderit blanditiis mollitia distinctio ducimus porro tempore
            perspiciatis sunt vel.
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              src="img/users/user-6.jpg"
              alt="Alexander Jones"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">Alexander Jones</h6>
          </div>
          <p class="reviews__text">
            Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
            quis praesentium sed inventore harum aliquam veritatis at adipisci
            ea assumenda!
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              src="img/users/user-3.jpg"
              alt="Ayla Cornell"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">Ayla Cornell</h6>
          </div>
          <p class="reviews__text">
            Perferendis quo aliquid iste quas laboriosam molestias illo est
            voluptatem odit ea. Vero placeat culpa provident dicta maiores!
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section class="section-cta">
      <div class="cta">
        <div class="cta__img cta__img--logo">
          <img src="img/logo-white.png" alt="Natours logo" class="" />
        </div>
        <img src="img/tour-5-2.jpg" alt="" class="cta__img cta__img--1" />
        <img src="img/tour-5-1.jpg" alt="" class="cta__img cta__img--2" />

        <div class="cta__content">
          <h2 class="heading-secondary">What are you waiting for?</h2>
          <p class="cta__text">
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button class="btn btn--green span-all-rows">Book tour now!</button>
        </div>
      </div>
    </section>  
*/
