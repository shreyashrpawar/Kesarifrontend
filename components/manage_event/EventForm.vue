<template>
  <div>
  <b-modal id="modal-1" hide-footer hide-header class="decor-modal p-0">
    <div class="decor-modal-info">
      <div class="decor-modal-info-left">
          <b-img :src="selectedDecorImage.image_url" />
      </div>
      <div class="decor-modal-info-right">
          <h4>Price : Rs {{selectedDecorImage.price}}</h4>
          <!-- <p>{{selectedDecorImage.description ? selectedDecorImage.description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}}</p> -->
      </div>
    </div>
  </b-modal>
  <b-modal id="modal-3" hide-footer hide-header class="decor-modal p-0">
    <div class="decor-modal-info" v-if="this.additionalModalData">
      <div class="decor-modal-info-left" >
          <b-img :src="this.additionalModalData.image_url" />
      </div>
      <div class="decor-modal-info-right">
          <h3>Price : {{this.additionalModalData.price}}</h3>
          <p>{{this.additionalModalData.description ? this.additionalModalData.description : ""}}</p>
      </div>
    </div>
  </b-modal>
  <b-modal id="modal-2" hide-footer hide-header class="decor-modal p-0" >
      <b-row class="bv-example-row ">
      <b-col cols="12" class="pt-3 pb-2">
        <h1>Preview Detials</h1>

        <hr />
      </b-col>
      <b-col cols="12" class="pb-3">
        <b-card>
          <h2 class="g-u-dat" v-if="finalEventChoose && finalEventChoose.length > 0">
          {{ finalEventChoose[0].hotelName }} <br> <small><i class="fi flaticon-user"></i> Guests - {{ finalEventChoose[0].guests }}, <i class="fi flaticon-calendar "></i> {{ finalEventChoose[0].startDate }} to  {{ finalEventChoose[0].endDate }}</small>
          </h2>
          <span class="alltotal">Rs. {{totalPrice}}</span>
        </b-card>
      </b-col>

        <b-col cols="12" class="pb-3 ">
            <div class="accordion preview-accor" role="tablist">
              <div v-if="this.finalEventChoose && this.finalEventChoose.length > 0">
                <b-card no-body class="mb-1" v-for="(item, index) in this.finalEventChoose" :key="index">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle="`accordion-${index}`" variant="info">

                          <div class="ac-top-right">
                              <img src="~assets/images/right-arrow.png" alt="right arrow" />
                              <h2>Total Event -  {{item.eventList && item.eventList.length ? item.eventList.length : 0}} <br /> <small>{{item.daySelect}}</small></h2>
                           </div>
                      </b-button>
                  </b-card-header>
                  <b-collapse :id="`accordion-${index}`" accordion="my-accordion" role="tabpanel" v-if="item.eventList && item.eventList.length > 0">
                      <b-card-body v-for="(option, index1) in item.eventList" :key="index1">
                        <div class="mb-3 priv-det-list">
                          <b-row>
                            <b-col cols="12">
                              <b-row>
                                <b-col class="col-12 col-sm-4">
                                  <b-img :src="option.selectedDecorImage.image_url" class="prive-min-img"></b-img>
                                </b-col>
                                <b-col class="col-12 col-sm-8">
                                  <h2>  {{option.eventName}} <br /> <small>{{item.daySelect}}</small></h2>
                                  <h4>Rs.{{option.selectedDecorImage.price}}</h4>
                                  <p>{{option.eventName}} starts at {{option.selectedTimeForm}} and ends at {{option.selectedTimeTo}}.</p>
                                  <div class="pick-des mt-2" v-if="option.selectedArtisImage.image_url">
                                    <div class="pic-top-img">
                                      <b-img :src="option.selectedArtisImage.image_url"></b-img>
                                    </div>
                                    <div class="pic-bot-con">
                                        <h5> {{option.selectedArtisImage.name}}</h5>
                                        <h4>Rs. {{option.selectedArtisImage.price}}</h4>
                                    </div>
                                  </div>
                                </b-col>
                              </b-row>

                            </b-col>
                            <b-col cols="12" >

                            </b-col>
                          </b-row>
                        </div>
                      </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
        </b-col>
        <b-col cols="12" class="pb-3 ">
            <div class="accordion preview-accor" role="tablist">
              <div v-if="this.eventChooseAddtional && this.eventChooseAddtional.length > 0">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle="`accordion-index`" variant="info">

                          <div class="ac-top-right">
                              <img src="~assets/images/right-arrow.png" alt="right arrow" />
                              <h2>Total Event -  {{eventChooseAddtional.length}} <br /> <small>Additional Event</small></h2>
                           </div>
                      </b-button>
                  </b-card-header>
                  <b-collapse :id="`accordion-index`" accordion="my-accordion" role="tabpanel">
                      <b-card-body v-for="(option, index1) in eventChooseAddtional" :key="index1">
                        <div class="mb-3 priv-det-list">
                          <b-row>
                            <b-col cols="12" v-if="option.selectedAdditionalDecorArray && option.selectedAdditionalDecorArray.length > 0">
                                <b-row>
                                  <b-col cols="6" class="mb-3" v-for="(item, index2) in option.selectedAdditionalDecorArray" :key="index2">
                                    <div class="pick-des">
                                      <div class="pic-top-img">
                                        <b-img :src="item.additionalDecorImage.image_url"></b-img>
                                      </div>
                                      <div class="pic-bot-con">
                                          <h5> Event - {{item.additionalDecorName}} <br /></h5>
                                          <h4>Rs. {{item.additionalDecorImage.price}}</h4>
                                      </div>
                                    </div>
                                  </b-col>
                               </b-row>


                            </b-col>
                            <b-col cols="12" v-if="option.selectedAdditonalArtisImage && option.selectedAdditonalArtisImage.image_url">
                              <b-row>
                              <b-col cols="6" class="mb-3">
                                    <div class="pick-des">
                                      <div class="pic-top-img">
                                       <b-img :src="option.selectedAdditonalArtisImage.image_url"></b-img>
                                      </div>
                                      <div class="pic-bot-con">
                                       <h5> Type - Artist</h5>
                                          <p class="mb-0">  {{option.additonalArtisName}} </p>
                                      </div>
                                    </div>
                                  </b-col>

                              </b-row>
                            </b-col>
                          </b-row>
                        </div>
                      </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
        </b-col>
         <b-col cols="12" class="pb-3 ">
        <b-row class="common-btn">
        <b-col cols="12" class="p-3  text-center">
        <button type="button" @click="handleClickThank()"
                      class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                      Submit
                    </button>
                    </b-col>
        </b-row>
        </b-col>
      </b-row>
  </b-modal>
    <div class="page-wrapper pt-5">
      <!-- top navbar for homescreen -->
      <div class="wpo-select-section mt-5">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="wpo-select-wrap">
                <div class="wpo-select-area">
                  <form class="clearfix" @submit.prevent="searchResorts">
                    <div class="select-sub input-border">
                      <div class="input-group"  @click="scrollItemView">
                        <date-range-picker ref="picker"  opens="center" :min-date="minDate.toISOString()" :max-date="maxDate"
                         :ranges="false" :showDropdowns="true" :autoApply="true" v-model="dateRange">
                          <template #date="data">
                            <span class="small">{{
                              data.date | dateCell
                            }}</span>
                          </template>

                          <template v-slot:input="picker" style="min-width: 350px">
                            <i class="fa fa-calendar fa-lg mr-1" style="color: #7e90a6; margin-left: 10px"></i>
                            <span v-if="picker.startDate == null" class="text-muted"> Start date -  End date</span>
                            <span v-else>{{ picker.startDate | date }} -
                              {{ picker.endDate | date }}</span>
                          </template>
                        </date-range-picker>
                      </div>
                    </div>
                    <div class="select-sub">
                      <!-- Datepicker as text field -->
                      <div class="input-group date">
                        <input id="scrollItem" type="number" :disabled="form.destinationGuest" style="font-size: 1.2rem" placeholder="Person count(pax)," min="1"
                          v-model="form.guests" required />
                        <i class="fi flaticon-user"></i>
                      </div>
                    </div>
                   <div class="select-sub">
                      <!-- Datepicker as text field -->
                      <div class="input-group date" >
                        <select class="styled-select" id="destination" style="font-size: 1.2rem" :disabled="form.destinationLocation"
                          v-model="form.location" @change="getPropertyLocationHotelName($event)" required>
                          <option value="" disabled selected>
                            Destination
                          </option>
                          <option v-for="location in propertyLocation" :value="location.name" :key="location.id">
                            {{ location.name }}
                          </option>
                        </select>
                        <i class="fi flaticon-placeholder"></i>
                      </div>
                    </div>

                    <div class="select-sub">
                      <!-- Datepicker as text field -->
                      <div class="input-group date" >
                        <select class="styled-select" id="hotelName" style="font-size: 1.2rem" :disabled="form.destinationHotelName"
                          v-model="form.hotelName" @change="getPropertyHotelName($event)" required>
                          <option value="" disabled selected>
                            Hotel Name
                          </option>
                          <option v-for="location in propertyLocationHotel" :value="location.name" :key="location.id">
                            {{ location.name }}
                          </option>
                        </select>
                        <i class="fi flaticon-bed"></i>
                      </div>
                    </div>

                    <div class="select-sub">
                      <button class="theme-btn" type="submit">
                        Start Planning
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center align-items-center" v-if="tabs.length == 0">
            <b-col lg="6" class="">
              <b-img src="~assets/images/vector/Muslim Wedding.svg"></b-img>
            </b-col>
          </div>
        </div>
      </div>

      <!-- search-area-end -->
      <div class="row row justify-content-center for-date-tab py-5">
        <div class="col-lg-9">
          <div class="tabs">
            <div v-for="(tab, index) in tabs" :key="index"  :class="{ active: activeTab === index + 1}"
             >
              Day {{ index + 1 }} - {{ tab }}
            </div>
            <div v-if="tabs.length > 0" :class="{ active: activeTab === 6 }">
              Additional
            </div>
          </div>
          <div class="tab-content">
            <div v-show="activeTab === 1">
              <div class="row mt-3" v-if="eventChoose.length > 0">
                <div class="col-md-4 mb-3" v-for="(item, index) in eventChoose" :key="index">
                  <div class="card event-card">
                    <h2>{{ item.eventName }}</h2>
                    <p>
                      <small>{{ item.selectedTimeForm }} to {{ item.selectedTimeTo }}</small>
                    </p>
                    <button @click="handleClickDelete(index)" class="car-close">Delete</button>
                  </div>
                </div>
              </div>
              <form class="card mt-3">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Choose Function</label>
                  <select class="select-op w-100" v-model="selectedEventName" @change="setEventName">
                    <option disabled value="">Please select an option</option>
                    <option v-for="option in resortsEvent" :key="option.id" :value="option.name">
                      {{ option.name }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Time Slot</label>
                  <div class="row align-items-center">
                    <div class="col-12 col-sm-3 mb-3">
                      <b-form-timepicker id="starttime" v-model="selectedTimeForm" locale="en"></b-form-timepicker>

                    </div>
                    <div class="col-12 col-sm-1 mb-3 text-center">
                      <strong>to</strong>
                    </div>
                    <div class="col-12 col-sm-3 mb-3">
                      <b-form-timepicker id="endtime" v-model="selectedTimeTo" locale="en"></b-form-timepicker>

                    </div>
                  </div>
                </div>
                <div class="form-group Decor-info" v-if="this.selectedEventItemTab.decor_visible">
                  <label for="exampleFormControlTextarea1">Decor images </label>
                  <div class="d-block w-100 Select-Decor">
                    <div class="form-check form-check-inline"    v-for="(item, index) in this.selectedEventItemTab.decor" :key="index">

                      <input class="form-check-input" v-on:change="getDecorImage(item)" type="radio" name="decor" :id="'decor' + index"
                      :value="item.name "
                        v-model="selectedDecor" />
                      <label class="form-check-label" :for="'decor' + index"><b-img :src="item.image_url"></b-img><br>
                        Rs {{item.price}}</label>
                        <div class="forview" v-b-modal.modal-1>View</div>
                    </div>
                  </div>
                </div>
                <div class="form-group Artist-info" v-if="this.selectedEventItemTab.artist_visible">
                  <label for="artist">Artist</label>
                  <select class="select-op w-100" v-model="selectedArtisName" @change="setAritsName">
                    <option disabled value="">Please select an option</option>
                    <option v-for="(item, index) in this.selectedEventItemTab.artists" :key="index" :value="item.name">
                      {{ item.name }}
                    </option>
                  </select>
                  <div class="d-block w-100 Select-Decor" v-if="this.selectedArtisItemTab && this.selectedArtisItemTab.artistsPersion && this.selectedArtisItemTab.artistsPersion.length > 0">
                    <div class="form-check form-check-inline" v-for="(item, index) in this.selectedArtisItemTab.artistsPersion" :key="index">
                      <input class="form-check-input"  v-on:change="getArtisImage(item)" type="radio" name="artistsPersion" :id="'artistsPersion' + index"
                      :value="item.name " v-model="selectedArtis"
                       />
                      <label class="form-check-label" :for="'artistsPersion' + index"><b-img :src="item.image_url">
                        </b-img><br>
                        {{item.name}} <br> Rs. {{item.price}}</label>
                        <b-link :href="item.url" class="artlink" target="_blank"><i class="fi flaticon-more"></i></b-link>
                    </div>
                  </div>
                </div>
                <div class="row common-btn mt-3">
                  <div class="col-lg-12 text-center">
                  <button type="button" @click="handleClick()"
                    class="btn mt-2 mb-2 p-3 theme-bg-color w-50 btn-danger btn-block rounded-pill">
                    Add New Event
                  </button>
                  </div>
                </div>

              </form>
              <div class="row common-btn mt-3">
                <div class="col-lg-12 text-right">

                  <button @click="handleSkip()" type="button" :disabled="eventChoose.length === 0"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div v-show="activeTab === 2">
              <div class="row mt-3" v-if="eventChoose2.length > 0">
                <div class="col-md-4 mb-3" v-for="item in eventChoose2" :key="item.eventName">
                  <div class="card event-card">
                    <h2>{{ item.eventName }}</h2>
                    <p>
                      <small>{{ item.selectedTimeForm }} to {{ item.selectedTimeTo }}</small>
                    </p>
                    <button @click="handleClickDelete2(index)" class="car-close">Delete</button>
                  </div>
                </div>
              </div>

              <form class="card mt-3">

                <div class="form-group">
                  <label for="exampleFormControlSelect1">Choose Function</label>
                  <select class="select-op w-100" v-model="selectedEventName" @change="setEventName">
                    <option disabled value="">Please select an option</option>
                    <option v-for="option in resortsEvent" :key="option.id" :value="option.name">
                      {{ option.name }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Time Slot</label>
                  <div class="row align-items-center">
                    <div class="col-12 col-sm-3 mb-3">
                      <b-form-timepicker id="starttime" v-model="selectedTimeForm" locale="en"></b-form-timepicker>

                    </div>
                    <div class="col-12 col-sm-1 mb-3 text-center">
                      <strong>to</strong>
                    </div>
                    <div class="col-12 col-sm-3 mb-3">
                      <b-form-timepicker id="endtime" v-model="selectedTimeTo" locale="en"></b-form-timepicker>

                    </div>
                  </div>
                </div>
                <div class="form-group Decor-info" v-if="this.selectedEventItemTab.decor_visible">
                  <label for="exampleFormControlTextarea1">Decor images </label>
                  <div class="d-block w-100 Select-Decor">
                    <div class="form-check form-check-inline" v-for="(item, index) in this.selectedEventItemTab.decor" :key="index">
                      <input class="form-check-input" v-on:change="getDecorImage(item)" type="radio" name="decor" :id="'decor' + index"
                      :value="item.name "
                        v-model="selectedDecor" />
                      <label class="form-check-label" :for="'decor' + index"><b-img :src="item.image_url"></b-img><br>
                        {{item.name}}</label>
                        <div class="forview" v-b-modal.modal-1>View</div>
                    </div>
                  </div>
                </div>
                <div class="form-group Artist-info" v-if="this.selectedEventItemTab.artist_visible">
                  <label for="artist">Artist</label>
                  <select class="select-op w-100" v-model="selectedArtisName" @change="setAritsName">
                    <option disabled value="">Please select an option</option>
                    <option v-for="(item, index) in this.selectedEventItemTab.artists" :key="index" :value="item.name">
                      {{ item.name }}
                    </option>
                  </select>
                  <div class="d-block w-100 Select-Decor" v-if="this.selectedArtisItemTab && this.selectedArtisItemTab.artistsPersion && this.selectedArtisItemTab.artistsPersion.length > 0">
                    <div class="form-check form-check-inline" v-for="(item, index) in this.selectedArtisItemTab.artistsPersion" :key="index">
                      <input class="form-check-input"  v-on:change="getArtisImage(item)" type="radio" name="artistsPersion" :id="'artistsPersion' + index"
                      :value="item.name " v-model="selectedArtis"
                       />
                      <label class="form-check-label" :for="'artistsPersion' + index"><b-img :src="item.image_url">
                        </b-img><br>
                        {{item.name}} <br> Rs. {{item.price}}</label>
                        <b-link :href="item.url" class="artlink" target="_blank"><i class="fi flaticon-more"></i></b-link>
                    </div>
                  </div>
                </div>
                <div class="row common-btn mt-3">
                  <div class="col-lg-12 text-center">
                    <button type="button" @click="handleClick2()"
                      class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                      Add New Event
                    </button>
                  </div>
                </div>
              </form>

              <div class="row common-btn mt-3">
                <div class="col-lg-12 text-right">
                <button @click="handleBack()" type="button"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Back
                  </button>
                  <button @click="handleSkip()" type="button"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Next
                  </button>


                </div>
              </div>
            </div>
            <div v-show="activeTab === 3">
              <div class="row mt-3" v-if="eventChoose3.length > 0">
                <div class="col-md-4 mb-3" v-for="item in eventChoose3" :key="item.eventName">
                  <div class="card event-card">
                    <h2>{{ item.eventName }}</h2>
                    <p>
                      <small>{{ item.selectedTimeForm }} to {{ item.selectedTimeTo }}</small>
                    </p>
                    <button @click="handleClickDelete3(index)" class="car-close">Delete</button>
                  </div>
                </div>
              </div>

              <form class="card mt-3">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Choose Function</label>
                  <select class="select-op w-100" v-model="selectedEventName" @change="setEventName">
                    <option disabled value="">Please select an option</option>
                    <option v-for="option in resortsEvent" :key="option.id" :value="option.name">
                      {{ option.name }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Time Slot</label>
                  <div class="row align-items-center">
                    <div class="col-12 col-sm-3 mb-3">
                      <b-form-timepicker id="starttime" v-model="selectedTimeForm" locale="en"></b-form-timepicker>

                    </div>
                    <div class="col-12 col-sm-1 mb-3 text-center">
                      <strong>to</strong>
                    </div>
                    <div class="col-12 col-sm-3 mb-3">
                      <b-form-timepicker id="endtime" v-model="selectedTimeTo" locale="en"></b-form-timepicker>

                    </div>
                  </div>
                </div>
                <div class="form-group Decor-info" v-if="this.selectedEventItemTab.decor_visible">
                  <label for="exampleFormControlTextarea1">Decor images </label>
                  <div class="d-block w-100 Select-Decor">
                    <div class="form-check form-check-inline" v-for="(item, index) in this.selectedEventItemTab.decor" :key="index">
                      <input class="form-check-input" v-on:change="getDecorImage(item)" type="radio" name="decor" :id="'decor' + index"
                      :value="item.name "
                        v-model="selectedDecor" />
                      <label class="form-check-label" :for="'decor' + index"><b-img :src="item.image_url"></b-img><br>
                        {{item.name}}</label><div class="forview" v-b-modal.modal-1>View</div>
                    </div>
                  </div>
                </div>
                <div class="form-group Artist-info" v-if="this.selectedEventItemTab.artist_visible">
                  <label for="artist">Artist</label>
                  <select class="select-op w-100" v-model="selectedArtisName" @change="setAritsName">
                    <option disabled value="">Please select an option</option>
                    <option v-for="(item, index) in this.selectedEventItemTab.artists" :key="index" :value="item.name">
                      {{ item.name }}
                    </option>
                  </select>
                  <div class="d-block w-100 Select-Decor" v-if="this.selectedArtisItemTab && this.selectedArtisItemTab.artistsPersion && this.selectedArtisItemTab.artistsPersion.length > 0">
                    <div class="form-check form-check-inline" v-for="(item, index) in this.selectedArtisItemTab.artistsPersion" :key="index">
                      <input class="form-check-input"  v-on:change="getArtisImage(item)" type="radio" name="artistsPersion" :id="'artistsPersion' + index"
                      :value="item.name " v-model="selectedArtis"
                       />
                      <label class="form-check-label" :for="'artistsPersion' + index"><b-img :src="item.image_url">
                        </b-img><br>
                        {{item.name}} <br> Rs. {{item.price}}</label>
                        <b-link :href="item.url" class="artlink" target="_blank"><i class="fi flaticon-more"></i></b-link>
                    </div>
                  </div>
                </div>
                <div class="row common-btn mt-3">
                  <div class="col-lg-12 text-center">
                    <button type="button" @click="handleClick3()"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Add New Event
                  </button>
                  </div>
                </div>
              </form>

              <div class="row common-btn mt-3">
                <div class="col-lg-12 text-right">

                  <button @click="handleBack()" type="button"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Back
                  </button>
                  <button @click="handleSkip()" type="button"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Next
                  </button>

                </div>
              </div>


            </div>
            <div v-show="activeTab === 4">
              <div class="row mt-3" v-if="eventChoose4.length > 0">
                <div class="col-md-4 mb-3" v-for="item in eventChoose4" :key="item.eventName">
                  <div class="card event-card">
                    <h2>{{ item.eventName }}</h2>
                    <p>
                      <small>{{ item.selectedTimeForm }} to {{ item.selectedTimeTo }}</small>
                    </p>
                    <button @click="handleClickDelete4(index)" class="car-close">Delete</button>
                  </div>
                </div>
              </div>

              <form class="card mt-3">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Choose Function</label>
                  <select class="select-op w-100" v-model="selectedEventName" @change="setEventName">
                    <option disabled value="">Please select an option</option>
                    <option v-for="option in resortsEvent" :key="option.id" :value="option.name">
                      {{ option.name }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Time Slot</label>
                  <div class="row align-items-center">
                    <div class="col-12 col-sm-3 mb-3">
                      <b-form-timepicker id="starttime" v-model="selectedTimeForm"  locale="en"></b-form-timepicker>

                    </div>
                    <div class="col-12 col-sm-1 mb-3 text-center">
                      <strong>to</strong>
                    </div>
                    <div class="col-12 col-sm-3 mb-3">
                      <b-form-timepicker id="endtime" v-model="selectedTimeTo" locale="en"></b-form-timepicker>

                    </div>
                  </div>
                </div>
                <div class="form-group Decor-info" v-if="this.selectedEventItemTab.decor_visible">
                  <label for="exampleFormControlTextarea1">Decor images </label>
                  <div class="d-block w-100 Select-Decor">
                    <div class="form-check form-check-inline" v-for="(item, index) in this.selectedEventItemTab.decor" :key="index">
                      <input class="form-check-input" v-on:change="getDecorImage(item)" type="radio" name="decor" :id="'decor' + index"
                      :value="item.name "
                        v-model="selectedDecor" />
                      <label class="form-check-label" :for="'decor' + index"><b-img :src="item.image_url"></b-img><br>
                        {{item.price}}</label><div class="forview" v-b-modal.modal-1>View</div>
                    </div>
                  </div>
                </div>
                <div class="form-group Artist-info" v-if="this.selectedEventItemTab.artist_visible">
                  <label for="artist">Artist</label>
                  <select class="select-op w-100" v-model="selectedArtisName" @change="setAritsName">
                    <option disabled value="">Please select an option</option>
                    <option v-for="(item, index) in this.selectedEventItemTab.artists" :key="index" :value="item.name">
                      {{ item.name }}
                    </option>
                  </select>
                  <div class="d-block w-100 Select-Decor" v-if="this.selectedArtisItemTab && this.selectedArtisItemTab.artistsPersion && this.selectedArtisItemTab.artistsPersion.length > 0">
                    <div class="form-check form-check-inline" v-for="(item, index) in this.selectedArtisItemTab.artistsPersion" :key="index">
                      <input class="form-check-input"  v-on:change="getArtisImage(item)" type="radio" name="artistsPersion" :id="'artistsPersion' + index"
                      :value="item.name " v-model="selectedArtis"
                       />
                      <label class="form-check-label" :for="'artistsPersion' + index"><b-img :src="item.image_url">
                        </b-img><br>
                        {{item.name}} <br> Rs. {{item.price}}</label>
                        <b-link :href="item.url" class="artlink" target="_blank"><i class="fi flaticon-more"></i></b-link>
                    </div>
                  </div>
                </div>
                <div class="row common-btn mt-3">
                  <div class="col-lg-12 text-center">
                    <button type="button" @click="handleClick4()"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Add New Event
                  </button>
                  </div>
                </div>
              </form>
              <div class="row common-btn">
                <div class="col-lg-12 text-right">

                  <button @click="handleBack()" type="button"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Back
                  </button>
                  <button @click="handleSkip()" type="button"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Next
                  </button>

                </div>
              </div>


            </div>
            <div v-show="activeTab === 6">
              <div class="row mt-3" v-if="this.eventChooseAddtional.length > 0">
                <div class="col-md-4 mb-3" v-for="item in this.eventChooseAddtional" :key="item.id">
                  <div class="card event-card">
                    <p class="mb-1" v-if="item.selectedAdditionalDecorArray && item.selectedAdditionalDecorArray.length > 0"> Additional Event:  <span v-for="option in item.selectedAdditionalDecorArray" :key="item.id"><strong>{{option.additionalDecorName}} <br></strong></span></p>
                    <p class="mb-1" v-if="item.additonalArtisName">
                     Artist Name: <strong> {{ item.additonalArtisName }}</strong>
                    </p>
                    <button @click="handleClickDeleteAdditional()" class="car-close">Delete</button>
                  </div>
                </div>
              </div>
              <form class="card mt-3">
              <div class="row">
                  <div class="col-lg-6 mb-3">
                    <label for="Bride">Bride Name</label>
                    <b-form-input v-model="bride_name" placeholder="Bride Name" id="Bride"></b-form-input>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label for="Groom">Groom Name</label>
                    <b-form-input v-model="groom_name" placeholder="Groom Name" id="Groom"></b-form-input>
                  </div>
                </div>
                <div v-if="this.resortsAdditionalEvent && this.resortsAdditionalEvent.length > 0">
                  <div class="form-group select-yn" v-for="(option, index) in this.resortsAdditionalEvent" :key="index" :value="option.name">
                    <label for="exampleFormControlTextarea1">{{option.name}}</label>
                    <div class="d-block w-100 Select-Decor">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" :disabled="eventChooseAddtional.length > 0" type="radio" :name="'Light33'+index" :id="'image56'+option.name" :value="true"
                          v-model="option.answer" />
                        <label class="form-check-label" :for="'image56'+option.name">Yes</label>

                      </div>
                      <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" :disabled="eventChooseAddtional.length > 0" v-on:change="removeAdditionalDecorImage(option, index)" type="radio" :name="'Light33'+index" :id="'image33'+option.name" :value="false"
                          v-model="option.answer" />
                        <label class="form-check-label" :for="'image33'+option.name">No</b-img></label>
                      </div>
                      <div v-if="option.answer">
                        <div class="form-group  adita-new" >
                          <div class="d-block w-100 Select-Decor">
                            <div class="form-check form-check-inline" v-for="(item, index1) in option.facilityDetials" :key="index1" :value="item.price">
                              <input class="form-check-input" v-on:change="getAdditionalDecorImage(option, item, index)" type="radio" :name="'abcd'+option.name" :id="item.image_url+item.price" :value="index1"
                                v-model="item.select" />
                              <label class="form-check-label" :for="item.image_url+item.price"><b-img
                                  :src="item.image_url"></b-img><br> Rs. {{item.price}}</label><div class="forview" v-b-modal.modal-3 @click="handleClickAddtionalModalOpen(item)">View</div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group Artist-info" v-if="this.resortsAdditionalEventArtis && this.resortsAdditionalEventArtis.length > 0">
                  <label for="artist">Artist</label>
                  <select class="select-op w-100" v-model="selectedAdditionalArtisName" @change="setAdditionalAritsName">
                    <option disabled value="">Please select an option</option>
                    <option v-for="(item, index) in this.resortsAdditionalEventArtis" :key="index" :value="item.name">
                      {{ item.name }}
                    </option>
                  </select>
                  <div class="d-block w-100 Select-Decor" v-if="this.selectedAddtionalArtisItemTab.artistsPersion && this.selectedAddtionalArtisItemTab.artistsPersion.length > 0">
                    <div class="form-check form-check-inline" v-for="(item, index) in this.selectedAddtionalArtisItemTab.artistsPersion" :key="index">
                      <input class="form-check-input"  v-on:change="getAdditionalArtisImage(item, selectedAddtionalArtisItemTab.name)" type="radio" name="selectedAddtionalArtisItemTab" :id="'selectedAddtionalArtisItemTab' + index"
                      :value="item.name " v-model="selectedAddtionalArtis"
                       />
                      <label class="form-check-label" :for="'selectedAddtionalArtisItemTab' + index"><b-img :src="item.image_url">
                        </b-img><br>
                        {{item.name}} <br> Rs. {{item.price}}</label>
                        <b-link :href="item.url" class="artlink" target="_blank"><i class="fi flaticon-more"></i></b-link>
                    </div>
                  </div>
                </div>
                <div class="row common-btn mt-3">
                  <div class="col-lg-12 text-center">
                     <button type="button" @click="handleClickAddtional()" :disabled="this.eventChooseAddtional.length > 0"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Add New Event
                  </button>
                  </div>
                </div>
              </form>
              <div class="row common-btn">
                <div class="col-lg-12 text-right">
                  <button @click="handleBack()" type="button"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Back
                  </button>

                  <button type="button" v-b-modal.modal-2 @click="handleClickPreview()"
                    class="btn mt-2 mb-2 p-3 theme-bg-color btn-danger btn-block rounded-pill">
                    Preview
                  </button>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import moment from "moment";
import "swiper/css/swiper.css";
import DateRangePicker from "vue2-daterange-picker";
import { BFormTimepicker } from 'bootstrap-vue';
//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import { mapActions } from "vuex";
import Vue from "vue";
import VueRouter from "vue-router";
import AppHeader from "../layout/AppHeader.vue";
Vue.use(VueRouter);
export default {
  name: "ManageEvent",
  components: {
    BFormTimepicker,
    DateRangePicker,
    AppHeader,
  },

  async asyncData({ $content, params }) {
    const blogs = await $content("blog", params.slug)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      blogs,
    };
  },

  data() {
    return {
      locations: "",
      propertyLocation: [],
      propertyLocationHotel: [],
      getHotelName: {},
      featuredResorts: "",
      topDestinations: [],
      topDestinationStartDate: moment(new Date())
        .add(1, "days")
        .format("YYYY-MM-DD"),
      topDestinationEndDate: moment(new Date())
        .add(2, "days")
        .format("YYYY-MM-DD"),
      form: {
        guests: "",
        startDate: "",
        endDate: "",
        locationId: "",
        budget: "",
        locationName: "",
        destinationHotelName: undefined,
        destinationLocation: undefined,
      },
      destinationState: null,
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      dateRange: {
        startDate: null,
        endDate: null,
      },
      minDate: new Date(),
      maxDate: null,
      activeTab: 0,
      tabs: [],
      selectedOption: "",
      options: [
        { value: "Mehendi decor", label: "Mehendi decor" },
        { value: "Sangeet decor", label: "Sangeet decor" },
        { value: "Haldi decor", label: "Haldi decor" },
        { value: "Wedding decor", label: "Wedding decor" },
        { value: "Entrance decor", label: "Entrance decor" },
        { value: "Reception decor", label: "Reception decor" },
      ],
      optionsArtist : [
        { value: "DJ", label: "DJ" },
        { value: "Dholwalas ", label: "Dholwalas " },
        { value: "Makeup Artist", label: "Makeup Artist" },
        { value: "Mehendi Artist", label: "Mehendi Artist" },
        { value: "Pandit", label: "Pandit" },
      ],
      eventChoose: [],
      finalEventChoose: [],
      eventChoose1: [],
      eventChoose2: [],
      eventChoose3: [],
      eventChoose4: [],
      timeSlot: "",
      eventName: "",
      artisName: "",
      selectedRadio: null,
      selectedDecor: null,
      selectedAddiDecor: null,
      selectedAddiDecorImage: null,
      selectedArtis: null,
      selectedAddtionalArtis: null,
      selectedArtist1: null,
      selectedArtist2: null,
      selectedArtist3: null,
      resortsData: {},
      resortsEvent: [],
      resortsAdditionalEvent: [],
      resortsAdditionalEventArtis: [],
      selectedTimeForm: null,
      selectedTimeTo: null,
      selectedEventItemTab: {},
      selectedArtisName: "",
      selectedArtisItemTab: {},
      selectedEventName: "",
      selectedDecorImage: {},
      selectedAdditionalDecor: {},
      selectedAdditionalDecorArray: [],
      selectedArtisImage: {},
      selectedTab: null,
      activeTabDisable : false,
      selectedAdditionalArtisName: "",
      additonalArtisName: "",
      selectedAddtionalArtisItemTab: {},
      selectedAdditonalArtisImage: {},
      eventChooseAddtional: [],
      additionalModalData : {},
      totalPrice: 0,
      bride_name: '',
      groom_name: '',
      prefilledData:{},
    };
  },

  head: {
    title:
      "Awayddings - Destination Wedding Planner in India with Top Destinations",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Awayddings is the best destination wedding planner in Goa offers luxurious destination weddings venues in Goa to experience the magic of nature.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Awaydding, destination, destination wedding, wedding planner, luxurious destination weddings, Goa, udaipur, venues, wedding dresses, photography, wedding invitations, engagement, bridesmaids, wedding cakes, grooming, weddings rings, weddings",
      },
    ],

    script: [
      {
        type: "text/javascript",
        src: "js/jquery.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "js/bootstrap.bundle.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "js/modernizr.custom.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "js/jquery-plugin-collection.js",
        body: true,
      },

      {
        type: "text/javascript",
        src: "js/script.js",
        body: true,
      },
    ],
  },
  computed: {

    calcStartDate() {
      return moment(new Date()).format("YYYY-MM-DD");
    },

    calcEndDate() {
      let newDate = new Date();
      newDate.setDate(newDate.getDate() + 2);
      return moment(newDate).format("YYYY-MM-DD");
    },
  },

  filters: {
    dateCell(value) {
      let dt = new Date(value);
      return dt.getDate();
    },
    date(val) {
      return val ? moment(val).format("DD/MM/YYYY") : "";
    },
  },

  methods: {
    ...mapActions(["SET_SEARCH_DATA", "toggleLoading"]),

    setupSearchData(){
      this.form.guests = this.$store.getters.getGuests;
      this.form.startDate = this.$store.getters.getStartDate;
      this.dateRange.startDate = this.$store.getters.getStartDate;
      this.form.endDate = this.$store.getters.getEndDate;
      this.dateRange.endDate = this.$store.getters.getEndDate;
      this.form.budget = this.$store.getters.getBudget;
      this.form.hotelName = this.$route.query.hotel_name??this.$store.getters.hotelName;
      this.form.location = this.$route.query.location??this.$store.getters.location;
      this.form.destinationHotelName = this.$route.query.hotel_name;
      this.form.destinationLocation = this.$route.query.location;
      console.log('this.form==============', this.form);
    },
    formattedDate(date) {
      const parts = date.split("-");
      const year = parseInt(parts[2], 10);
      const month = parseInt(parts[1], 10) - 1; // Months are zero-indexed
      const day = parseInt(parts[0], 10);

      return new Date(year, month, day);
    },
 getPrefillDataFunc() {
  let storage = JSON.parse(window.localStorage.getItem("vuex"));
      if(storage){
      this.$axios
        .get("api/v1/getEventManagementData",{
              headers: {
                Authorization: `Bearer ${storage.auth.token}`,
              },
            })
        .then((res) => {
          // this.resorts.push(res.data.data.data);
          this.prefilledData = res?.data?.data?.prefilled_data;
          if(this.prefilledData){
            this.form.destinationGuest = this.prefilledData?.guest;
            this.form.guests = this.prefilledData?.guest;
            this.bride_name = this.prefilledData?.bride_name;
            this.groom_name = this.prefilledData?.groom_name;
            this.dateRange.startDate = this.formattedDate(this.prefilledData?.check_in);

            this.minDate = this.formattedDate(this.prefilledData?.check_in);
            this.maxDate = this.formattedDate(this.prefilledData?.check_out);

            this.dateRange.endDate = this.formattedDate(this.prefilledData?.check_out);
            this.form.hotelName = this.prefilledData?.property_name;
            this.form.location = this.prefilledData?.location_name;
            this.form.destinationHotelName = this.prefilledData?.property_name;
            this.form.destinationLocation = this.prefilledData?.location_name;
            if(this.propertyLocation?.length){
              let selectedPropertyItemTab = this.propertyLocation.find(item => item.name === this.form.location);
              this.propertyLocationHotel = selectedPropertyItemTab.property
              let selectedPropertyItem = this.propertyLocationHotel.find(item => item.name === this.form.hotelName);
              if(selectedPropertyItem){
                this.getHotelName = selectedPropertyItem;
              }
            }
          }
          console.log('res========================', res);
          console.log('prefilledData========================', this.prefilledData);
        })
        .catch((err) => {
          if (err) this.error = true;
        });
      }
    },
    getPropertyWithLocations() {
      let storage = JSON.parse(window.localStorage.getItem("vuex"));
      if(storage){
        this.$axios.get("api/v1/get_property_with_location",{
          headers: {
              Authorization: `Bearer ${storage.auth.token}`,
            },
          }).then((res) => {
          this.propertyLocation = res.data.data;
          if(this.form.location){
            let selectedPropertyItemTab = this.propertyLocation.find(item => item.name === this.form.location);
            this.propertyLocationHotel = selectedPropertyItemTab.property
          }
      console.log("res================", res);
      console.log("propertyLocation================", this.propertyLocation);

        }).catch((err) => {
          if (err) this.error = true;
        });
      }
    },
    getPropertyLocationHotelName(event) {
      // this.form.locationName = event.target[event.target.selectedIndex].text;
      let selectedPropertyItemTab = this.propertyLocation.find(item => item.name === this.form.location);
      this.propertyLocationHotel = selectedPropertyItemTab.property

    },
    getPropertyHotelName(event) {
      console.log("form.hotelName================", this.form.hotelName);
      let selectedPropertyItem = this.propertyLocationHotel.find(item => item.name === this.form.hotelName);
      if(selectedPropertyItem){
        this.getHotelName = selectedPropertyItem;
      }

      // this.form.hotelName = event.target[event.target.selectedIndex].text;

    },
    // scroll calender when clicked
    scrollItemView() {
      var element = document.getElementById("scrollItem");
      element.scrollIntoView({ behavior: "smooth" });
    },

    setEventName(event) {
      this.selectedEventName = event.target.value;
      this.eventName = event.target.value;
      this.selectedEventItemTab = this.resortsEvent.find(item => item.name === this.selectedEventName);
      this.selectedArtisName = "";
      this.selectedArtisItemTab = {};
      console.log("this.eventName================", this.eventName);
      console.log("this.selectedEventItemTab================", this.selectedEventItemTab);
    },
    setAritsName(event) {
      console.log("event================", event);
      this.selectedArtisName = event.target.value;
      this.artisName = event.target.value;
      this.selectedArtisItemTab = this.selectedEventItemTab.artists.find(item => item.name === this.selectedArtisName);
      console.log("this.eventName================", this.artisName);
      console.log("this.selectedArtisItemTab================", this.selectedArtisItemTab);
    },
    setAdditionalAritsName(event) {
      console.log("event================", event);
      this.selectedAdditionalArtisName = event.target.value;
      this.additonalArtisName = event.target.value;
      this.selectedAddtionalArtisItemTab = this.resortsData.additional_artist.find(item => item.name === this.selectedAdditionalArtisName);
      console.log("this.additonalArtisName================", this.additonalArtisName);
      console.log("this.selectedAddtionalArtisItemTab================", this.selectedAddtionalArtisItemTab);
    },
    setLocationName(event) {
      this.form.locationName = event.target[event.target.selectedIndex].text;
    },
    handleTimeChange(data) {
      this.timeSlot = data;
      console.log("this.timeSlot================", this.timeSlot);
    },
    getDaysBetweenDates(date1, date2) {
      // Convert both dates to milliseconds
      const date1Ms = date1.getTime();
      const date2Ms = date2.getTime();

      // Calculate the difference in milliseconds
      const differenceMs = Math.abs(date2Ms - date1Ms);

      // Convert the difference to days
      const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

      return days;
    },

    searchResorts() {
      // e.prevent();
      let storage = JSON.parse(window.localStorage.getItem("vuex"));

      this.form.startDate = moment(this.dateRange.startDate).format(
        "YYYY-MM-DD"
      );
      this.form.endDate = moment(this.dateRange.endDate).format("YYYY-MM-DD");

      const differenceMs = Math.abs(
        new Date(this.form.endDate) - new Date(this.form.startDate)
      );

      // Convert the difference to days
      const days = 1 + Math.floor(differenceMs / (1000 * 60 * 60 * 24));
      console.log("days=====================", days);
      if (days > 4) {
        alert("Maximum selected date range no of 4");
        return;
      } else {
        this.tabs = [];
        const startDate = moment(this.dateRange.startDate).format("YYYY-MM-DD"); // Start date
        for (let i = 0; i < days; i++) {
          this.tabs.push(moment(startDate).add(i, "day").format("YYYY-MM-DD"));
        }
        console.log("tabs=================", this.tabs);
      }
      if(storage){
      this.$axios
        .get("api/v1/getEventManagementData",{
              headers: {
                Authorization: `Bearer ${storage.auth.token}`,
              },
            })
        .then((res) => {
          // this.resorts.push(res.data.data.data);
          this.resortsData = res.data.data;
          this.resortsEvent = res.data.data.event;
          this.resortsAdditionalEvent = this.resortsData.additional_facility;
          this.resortsAdditionalEventArtis = this.resortsData.additional_artist;
          console.log('res========================', res);
          console.log('this.resortsData========================', this.resortsData);
          console.log('this.resortsEvent========================', this.resortsEvent);
          console.log('this.resortsAdditionalEvent========================', this.resortsAdditionalEvent);
          console.log('this.resortsAdditionalEventArtis========================', this.resortsAdditionalEventArtis);
        })
        .catch((err) => {
          if (err) this.error = true;
        });
      }
      this.activeTab = 1;
    },
    activateTab(index) {
      this.activeTab = index + 1;
      console.log("this.activeTab================", this.activeTab);
    },
    handleSkip(index) {
      var index = this.activeTab;
      if (index == this.tabs.length) {
        this.activeTab = 6;
      } else {
        this.activeTab += 1;
      }
      this.selectedTimeForm = null
      this.selectedTimeTo = null
      this.selectedDecorImage = {}
      this.selectedArtisImage = {}
      this.eventName = "";
      this.artisName = "";
      this.selectedArtisName = "";
      this.selectedEventName = "";
      this.selectedDecor = null;
      this.selectedArtis = null;

    },
    handleBack(index) {
      console.log('index==================', index);
      if (this.activeTab === 6) {
        this.activeTab = this.tabs.length;
      } else {
        this.activeTab -= 1;
      }
      this.selectedTimeForm = null
      this.selectedTimeTo = null
      this.selectedDecorImage = {}
      this.selectedArtisImage = {}
      this.eventName = "";
      this.artisName = "";
      this.selectedArtisName = "";
      this.selectedEventName = "";
      this.selectedDecor = null;
      this.selectedArtis = null;

    },
    handleClick() {
      if(!this.eventName){
        alert('Please select the event name');
        return;
      }
      if (this.finalEventChoose && this.finalEventChoose?.length) {
        let foundSubArray = this.finalEventChoose.find(subArray => {
          if (subArray && subArray?.eventList && subArray?.eventList?.length) {
            return subArray?.eventList?.find(item => item.eventName === this.eventName);
          }
        });

        if (foundSubArray) {
          alert(`The event "${this.eventName}" has already been added.`);
          return;
        }
        console.log(foundSubArray)
      }
      if(this.selectedTimeForm && this.selectedTimeTo){
        let timeInMillisecondsFrom = this.calculateMilliseconds(this.selectedTimeForm);
        let timeInMillisecondsTo = this.calculateMilliseconds(this.selectedTimeTo);
        if(timeInMillisecondsFrom < timeInMillisecondsTo){
          if(this.finalEventChoose && this.finalEventChoose.length && this.finalEventChoose[0]?.eventList?.length > 0){
            let lasteventList =  this.finalEventChoose[0]?.eventList[this.finalEventChoose[0]?.eventList?.length -1]
            console.log(lasteventList)
            if(lasteventList?.selectedTimeForm){
                let timeInMillisecondsFromPrev = this.calculateMilliseconds(lasteventList?.selectedTimeForm);
                let timeInMillisecondsToPrev = this.calculateMilliseconds(lasteventList?.selectedTimeTo);
                if((timeInMillisecondsFrom < timeInMillisecondsFromPrev && timeInMillisecondsTo <= timeInMillisecondsFromPrev) || (timeInMillisecondsFrom >= timeInMillisecondsToPrev && timeInMillisecondsTo > timeInMillisecondsToPrev)){
                  console.log(this.finalEventChoose[0])
                }else{
                  alert("Time slot has already been added.");
                  return;
                }
              }
          }
        }else{
          alert("The start time must be earlier than the end time.");
          return;
        }
      }else{
        alert('Please select time');
        return;
      }
      if(Object.keys(this.selectedDecorImage).length === 0){
        alert('Please select decor image');
        return;
      }
      console.log('this.finalEventChoose[0]====================', this.finalEventChoose);

      this.eventChoose.push({
        id: this.eventChoose.length,
        selectedTimeForm: this.selectedTimeForm,
        selectedTimeTo: this.selectedTimeTo,
        eventName: this.eventName,
        eventId: this.selectedEventItemTab.id,
        selectedDecorImage: this.selectedDecorImage,
        selectedArtisName: this.selectedArtisName,
        selectedArtisImage: this.selectedArtisImage,
      });
      this.finalEventChoose[0] = {
        daySelect : this.tabs[0],
        eventList : this.eventChoose,
        hotelName : this.form.hotelName,
        guests : this.form.guests,
        startDate : this.form.startDate,
        endDate : this.form.endDate,
      }
      this.activeTabDisable = true;

      this.selectedTimeForm = null
      this.selectedTimeTo = null
      this.selectedDecorImage = {}
      this.selectedArtisImage = {}
      this.eventName = "";
      this.artisName = "";
      this.selectedArtisName = "";
      this.selectedEventName = "";
      this.selectedDecor = null;
      this.selectedArtis = null;
      this.selectedEventItemTab = {};
      this.selectedArtisItemTab = {};



    },
    handleClick2() {
      if(!this.eventName){
        alert('Please select the event name');
        return;
      }
      if (this.finalEventChoose && this.finalEventChoose?.length) {
        let foundSubArray = this.finalEventChoose.find(subArray => {
          if (subArray && subArray?.eventList && subArray?.eventList?.length) {
            return subArray?.eventList?.find(item => item.eventName === this.eventName);
          }
        });

        if (foundSubArray) {
          alert(`The event "${this.eventName}" has already been added.`);
          return;
        }
        console.log(foundSubArray)
      }
      if(this.selectedTimeForm && this.selectedTimeTo){
        let timeInMillisecondsFrom = this.calculateMilliseconds(this.selectedTimeForm);
        let timeInMillisecondsTo = this.calculateMilliseconds(this.selectedTimeTo);
        if(timeInMillisecondsFrom < timeInMillisecondsTo){
          if(this.finalEventChoose && this.finalEventChoose.length ){
            if(this.finalEventChoose[1]?.eventList && this.finalEventChoose[1]?.eventList?.length){
              let lasteventList =  this.finalEventChoose[1]?.eventList[this.finalEventChoose[1]?.eventList?.length -1]
              console.log(lasteventList)
              if(lasteventList?.selectedTimeForm){
                let timeInMillisecondsFromPrev = this.calculateMilliseconds(lasteventList?.selectedTimeForm);
                let timeInMillisecondsToPrev = this.calculateMilliseconds(lasteventList?.selectedTimeTo);
                if((timeInMillisecondsFrom < timeInMillisecondsFromPrev && timeInMillisecondsTo <= timeInMillisecondsFromPrev) || (timeInMillisecondsFrom >= timeInMillisecondsToPrev && timeInMillisecondsTo > timeInMillisecondsToPrev)){
                  console.log(this.finalEventChoose[0])
                }else{
                  alert("Time slot has already been added.");
                  return;
                }
              }
            }
          }
        }else{
          alert("The start time must be earlier than the end time.");
          return;
        }
      }else{
        alert('Please select time');
        return;
      }
      if(Object.keys(this.selectedDecorImage).length === 0){
        alert('Please select decor image');
        return;
      }

      this.eventChoose2.push({
        id: this.eventChoose2.length,
        selectedTimeForm: this.selectedTimeForm,
        selectedTimeTo: this.selectedTimeTo,
        eventName: this.eventName,
        eventId: this.selectedEventItemTab.id,
        selectedDecorImage: this.selectedDecorImage,
        selectedArtisName: this.selectedArtisName,
        selectedArtisImage: this.selectedArtisImage,
      });
      this.finalEventChoose[1] = {
        daySelect : this.tabs[1],
        eventList : this.eventChoose2,
        hotelName : this.form.hotelName,
        guests : this.form.guests,
        startDate : this.form.startDate,
        endDate : this.form.endDate,
      }
      this.activeTabDisable = true;
      console.log('this.finalEventChoose================', this.finalEventChoose);

      this.selectedTimeForm = null
      this.selectedTimeTo = null
      this.selectedDecorImage = {}
      this.selectedArtisImage = {}
      this.eventName = "";
      this.artisName = "";
      this.selectedArtisName = "";
      this.selectedEventName = "";
      this.selectedDecor = null;
      this.selectedArtis = null;
      this.selectedEventItemTab = {};
      this.selectedArtisItemTab = {};
    },
    handleClick3() {
      if(!this.eventName){
        alert('Please select the event name');
        return;
      }
      if (this.finalEventChoose && this.finalEventChoose?.length) {
        let foundSubArray = this.finalEventChoose.find(subArray => {
          if (subArray && subArray?.eventList && subArray?.eventList?.length) {
            return subArray?.eventList?.find(item => item.eventName === this.eventName);
          }
        });

        if (foundSubArray) {
          alert(`The event "${this.eventName}" has already been added.`);
          return;
        }
      }
      if(this.selectedTimeForm && this.selectedTimeTo){
        let timeInMillisecondsFrom = this.calculateMilliseconds(this.selectedTimeForm);
        let timeInMillisecondsTo = this.calculateMilliseconds(this.selectedTimeTo);
        if(timeInMillisecondsFrom < timeInMillisecondsTo){
          if(this.finalEventChoose && this.finalEventChoose.length ){
            if(this.finalEventChoose[2]?.eventList && this.finalEventChoose[2]?.eventList?.length){
              let lasteventList =  this.finalEventChoose[2]?.eventList[this.finalEventChoose[2]?.eventList?.length -1]
              console.log(lasteventList)
              if(lasteventList?.selectedTimeForm){
                let timeInMillisecondsFromPrev = this.calculateMilliseconds(lasteventList?.selectedTimeForm);
                let timeInMillisecondsToPrev = this.calculateMilliseconds(lasteventList?.selectedTimeTo);
                if((timeInMillisecondsFrom < timeInMillisecondsFromPrev && timeInMillisecondsTo <= timeInMillisecondsFromPrev) || (timeInMillisecondsFrom >= timeInMillisecondsToPrev && timeInMillisecondsTo > timeInMillisecondsToPrev)){
                  console.log(this.finalEventChoose[0])
                }else{
                  alert("Time slot has already been added.");
                  return;
                }
              }
            }
          }
        }else{
          alert("The start time must be earlier than the end time.");
          return;
        }
      }else{
        alert('Please select time');
        return;
      }
      if(Object.keys(this.selectedDecorImage).length === 0){
        alert('Please select decor image');
        return;
      }

      this.eventChoose3.push({
        id: this.eventChoose3.length,
        selectedTimeForm: this.selectedTimeForm,
        selectedTimeTo: this.selectedTimeTo,
        eventName: this.eventName,
        eventId: this.selectedEventItemTab.id,
        selectedDecorImage: this.selectedDecorImage,
        selectedArtisName: this.selectedArtisName,
        selectedArtisImage: this.selectedArtisImage,
      });
      this.finalEventChoose[2] = {
        daySelect : this.tabs[2],
        eventList : this.eventChoose3,
        hotelName : this.form.hotelName,
        guests : this.form.guests,
        startDate : this.form.startDate,
        endDate : this.form.endDate,
      }
      this.activeTabDisable = true;
      console.log('this.finalEventChoose================', this.finalEventChoose);

      this.selectedTimeForm = null
      this.selectedTimeTo = null
      this.selectedDecorImage = {}
      this.selectedArtisImage = {}
      this.eventName = "";
      this.artisName = "";
      this.selectedArtisName = "";
      this.selectedEventName = "";
      this.selectedDecor = null;
      this.selectedArtis = null;
      this.selectedEventItemTab = {};
      this.selectedArtisItemTab = {};
    },
    handleClick4() {
      if(!this.eventName){
        alert('Please select the event name');
        return;
      }
      if (this.finalEventChoose && this.finalEventChoose?.length) {
        let foundSubArray = this.finalEventChoose.find(subArray => {
          if (subArray && subArray?.eventList && subArray?.eventList?.length) {
            return subArray?.eventList?.find(item => item.eventName === this.eventName);
          }
        });

        if (foundSubArray) {
          alert(`The event "${this.eventName}" has already been added.`);
          return;
        }
        console.log(foundSubArray)
      }
      if(this.selectedTimeForm && this.selectedTimeTo){
        let timeInMillisecondsFrom = this.calculateMilliseconds(this.selectedTimeForm);
        let timeInMillisecondsTo = this.calculateMilliseconds(this.selectedTimeTo);
        if(timeInMillisecondsFrom < timeInMillisecondsTo){
          if(this.finalEventChoose && this.finalEventChoose.length ){
            if(this.finalEventChoose[3]?.eventList && this.finalEventChoose[3]?.eventList.length){
              let lasteventList =  this.finalEventChoose[3]?.eventList[this.finalEventChoose[3]?.eventList.length -1]
              console.log(lasteventList)
              if(lasteventList?.selectedTimeForm){
                let timeInMillisecondsFromPrev = this.calculateMilliseconds(lasteventList?.selectedTimeForm);
                let timeInMillisecondsToPrev = this.calculateMilliseconds(lasteventList?.selectedTimeTo);
                if((timeInMillisecondsFrom < timeInMillisecondsFromPrev && timeInMillisecondsTo <= timeInMillisecondsFromPrev) || (timeInMillisecondsFrom >= timeInMillisecondsToPrev && timeInMillisecondsTo > timeInMillisecondsToPrev)){
                  console.log(this.finalEventChoose[0])
                }else{
                  alert("Time slot has already been added.");
                  return;
                }
              }
            }
          }
        }else{
          alert("The start time must be earlier than the end time.");
          return;
        }
      }else{
        alert('Please select time');
        return;
      }
      if(Object.keys(this.selectedDecorImage).length === 0){
        alert('Please select decor image');
        return;
      }

      this.eventChoose4.push({
        id: this.eventChoose4.length,
        selectedTimeForm: this.selectedTimeForm,
        selectedTimeTo: this.selectedTimeTo,
        eventName: this.eventName,
        eventId: this.selectedEventItemTab.id,
        selectedDecorImage: this.selectedDecorImage,
        selectedArtisName: this.selectedArtisName,
        selectedArtisImage: this.selectedArtisImage,
      });
      this.finalEventChoose[3] = {
        daySelect : this.tabs[3],
        eventList : this.eventChoose4,
        hotelName : this.form.hotelName,
        guests : this.form.guests,
        startDate : this.form.startDate,
        endDate : this.form.endDate,
      }
      this.activeTabDisable = true;
      console.log('this.finalEventChoose================', this.finalEventChoose);

      this.selectedTimeForm = null
      this.selectedTimeTo = null
      this.selectedDecorImage = {}
      this.selectedArtisImage = {}
      this.eventName = "";
      this.artisName = "";
      this.selectedArtisName = "";
      this.selectedEventName = "";
      this.selectedDecor = null;
      this.selectedArtis = null;
      this.selectedEventItemTab = {};
      this.selectedArtisItemTab = {};
    },
    handleClickAddtional() {
      if(Object.keys(this.selectedAdditonalArtisImage).length === 0 && this.selectedAdditionalDecorArray?.length === 0){
        alert('Please select additional decor or artis');
        return;
      }

      this.eventChooseAddtional.push({
        id: this.eventChooseAddtional.length,
        selectedAdditionalDecor: this.selectedAdditionalDecor,
        selectedAdditionalDecorArray: this.selectedAdditionalDecorArray,
        selectedAdditonalArtisImage: this.selectedAdditonalArtisImage,
        additonalArtisName: this.additonalArtisName,
        additonalArtisId: this.selectedAddtionalArtisItemTab.id,
      });
      console.log('this.eventChooseAddtional================', this.eventChooseAddtional);
      this.resortsAdditionalEvent = [];
      this.resortsAdditionalEventArtis = [];
      this.resortsAdditionalEvent = this.resortsData?.additional_facility;
      this.resortsAdditionalEventArtis = this.resortsData?.additional_artist;

    },
    handleClickPreview() {
      this.totalPrice = 0;
      for (const option of this.finalEventChoose) {
        for (const facilityDetail of option?.eventList) {
          if(facilityDetail?.selectedArtisImage && facilityDetail?.selectedArtisImage?.price){
            let price = facilityDetail?.selectedArtisImage?.price;
            if (!isNaN(price)) {
              this.totalPrice += price;
            }
            console.log('price================', price);

          }
          if(facilityDetail?.selectedDecorImage && facilityDetail?.selectedDecorImage?.price){
            let price1 = facilityDetail?.selectedDecorImage?.price;
            if (!isNaN(price1)) {
              this.totalPrice += price1;
            }
            console.log('price1================', price1);

          }
        }
      }
      if(this.eventChooseAddtional?.length){
        for (const option of this.eventChooseAddtional) {
          for (const facilityDetail of option?.selectedAdditionalDecorArray) {
            if(facilityDetail?.additionalDecorImage && facilityDetail?.additionalDecorImage?.price){
              let price2 = facilityDetail?.additionalDecorImage?.price;
              if (!isNaN(price2)) {
                this.totalPrice += price2;
              }
              console.log('price2================', price2);


            }
          }
          if(option?.selectedAdditonalArtisImage && option?.selectedAdditonalArtisImage?.price){
              let price3 = option?.selectedAdditonalArtisImage?.price;
              if (!isNaN(price3)) {
                this.totalPrice += price3;
              }
              console.log('price3================', price3);


            }
        }
      }
    console.log('this.totalPrice================', this.totalPrice);
    console.log('this.finalEventChoose================', this.finalEventChoose);
    console.log('this.eventChooseAddtional================', this.eventChooseAddtional);
    },
    handleClickThank() {
      console.log('this.finalEventChoose================', this.finalEventChoose);
      console.log('this.eventChooseAddtional================', this.eventChooseAddtional);
      let storage = JSON.parse(window.localStorage.getItem("vuex"));
      if(storage){
        let event = [];
      for (const option of this.finalEventChoose) {
          for (const facilityDetail of option?.eventList) {
            event.push({
                "date": option?.daySelect,
                "event_id": facilityDetail?.eventId,
                "artist_person_id": facilityDetail?.selectedArtisImage?.id ? facilityDetail?.selectedArtisImage?.id : "",
                "decor_person_id": facilityDetail?.selectedDecorImage?.id,
                "start_time": facilityDetail?.selectedTimeForm,
                "end_time": facilityDetail?.selectedTimeTo
              })
          }
        }

        if(event && event?.length){
          let additional_artist = {};
          let addson_facilities = [];
          if(this.eventChooseAddtional?.length){
          for (const option of this.eventChooseAddtional) {
            for (const facilityDetail of option?.selectedAdditionalDecorArray) {
              addson_facilities.push({
                "em_addon_facility_id": facilityDetail?.additionalDecorId,
                "em_addon_facility_details_id": facilityDetail?.additionalDecorImage?.id,
              })
            }
            if(Object.keys(option?.selectedAdditonalArtisImage).length){
            additional_artist ={
              artist_id : option?.additonalArtisId,
              artist_details_id : option?.selectedAdditonalArtisImage?.id,
            }
          }
          }
        }
        let addition = {};
        if(addson_facilities?.length){
          addition.addson_facilities = addson_facilities?.length ? addson_facilities : [];
        }
        if(Object.keys(additional_artist).length){
          addition.additional_artist = Object.keys(additional_artist).length ? additional_artist : {};
        }
        let data = {
              "property_id": this.getHotelName?.id,
              "start_date": this.finalEventChoose[0].startDate,
              "end_date": this.finalEventChoose[0].endDate,
              "pax": this.finalEventChoose[0].guests,
              "bride_name": this.bride_name,
              "groom_name": this.groom_name,
              "total_amount": this.totalPrice,
              "events": event,
              "addition": addition
            }

            console.log('data==============', data);
            this.$axios
              .post("submit_em_data",data,{
                    headers: {
                      Authorization: `Bearer ${storage.auth.token}`,
                    },
                  })
              .then((res) => {
                console.log('res========================', res);
                if(res?.data?.success){
                  this.$router.push({ path: "thanks" });
                }else{
                  alert('Something went wrong');
                }
              })
              .catch((err) => {
                if (err) this.error = true;
              });
        }
      }


    },
    getDecorImage(data) {
      this.selectedDecorImage = data;
      console.log("this.selectedDecorImage================", this.selectedDecorImage);
    },
    removeAdditionalDecorImage(option, index){
      if(this.selectedAdditionalDecorArray && this.selectedAdditionalDecorArray.length){

        this.selectedAdditionalDecorArray.splice(index, 1);
        console.log('this.selectedAdditionalDecorArray=============----------', this.selectedAdditionalDecorArray);
      }

    },
    getAdditionalDecorImage(option, data, index) {
      this.selectedAdditionalDecor ={
        additionalDecorImage: data,
        additionalDecorName: option.name,
        additionalDecorId: option.id,
      };
      console.log('option=============----------', option);
      if(this.selectedAdditionalDecorArray && this.selectedAdditionalDecorArray.length){
        let data = this.selectedAdditionalDecorArray.find(item => item.additionalDecorName === option.name)
        console.log('data=============----------', data);
        if(data){
          this.selectedAdditionalDecorArray[index] = this.selectedAdditionalDecor
        }else{

          this.selectedAdditionalDecorArray.push(this.selectedAdditionalDecor)
        }
      }else{
        this.selectedAdditionalDecorArray.push(this.selectedAdditionalDecor)

      }
      console.log('this.selectedAdditionalDecorArray=============----------', this.selectedAdditionalDecorArray);

      console.log("this.selectedAdditionalDecor================", this.selectedAdditionalDecor);
    },
    getArtisImage(data) {
      this.selectedArtisImage = data;
      console.log("this.selectedArtisImage================", this.selectedArtisImage);
    },

    getAdditionalArtisImage(data, name) {
      this.selectedAdditonalArtisImage = data;
      this.selectedAdditionalArtisName = name;
      this.additonalArtisName = name;
      console.log("this.selectedAdditonalArtisImage================", this.selectedAdditonalArtisImage);
    },
    calculateMilliseconds(newTime) {
      if(newTime){

        const [hours, minutes, seconds] = newTime.split(':').map(Number);

        const hoursInMilliseconds = hours * 60 * 60 * 1000;
        const minutesInMilliseconds = minutes * 60 * 1000;
        const secondsInMilliseconds = seconds * 1000;

        return hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds;
      }
    },
    handleClickDelete(index) {
      this.finalEventChoose[0]?.eventList?.splice(index, 1);
      console.log("this.finalEventChoose================", this.finalEventChoose);

    },
    handleClickDelete2(index) {
      this.finalEventChoose[1]?.eventList?.splice(index, 1);
    },
    handleClickDelete3(index) {
      this.finalEventChoose[2]?.eventList?.splice(index, 1);
    },
    handleClickDelete4(index) {
      this.finalEventChoose[3]?.eventList?.splice(index, 1);
    },
    handleClickDeleteAdditional() {
      this.eventChooseAddtional= [];
      this.selectedAdditionalDecorArray= [];
      this.selectedAdditonalArtisImage = {};
      this.selectedAdditionalDecor = {};
      this.selectedAddtionalArtis = null;
      this.additonalArtisName = "";

    },
    handleClickAddtionalModalOpen(item) {
      this.additionalModalData = {};
      this.additionalModalData = item;
    },
  },
  watch: {
    selectedTimeForm(newDate) {
      // Your custom function logic here
      // console.log('Selected date changed:', newDate);
      this.handleTimeChange(newDate);
    }
  },

  mounted() {
    this.getPrefillDataFunc();
    this.setupSearchData();
    this.getPropertyWithLocations();
    // this.handleClick();
  },
};
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  .tabs {
    display: flex;
  }
  button.car-close {
    position: absolute;
    right: 18px;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 50px;
    background: #fff;
    border: 2px solid #fc3333;
    color: #fc3333;
  }
  .select-op {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 50px;
    padding: 12px 16px;
  }

  .tabs div {
    padding: 10px;
    cursor: pointer;
  }

  .tabs div.active {
    background-color: #ccc;
  }
  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .tab-content {
    margin-top: 10px;
  }

  ::v-deep h2 {
    font-family: "Nunito";
    font-weight: 700 !important;
  }

  .card>img.card-img-left {
    max-height: 300px;
  }

  .styled-select {
    background-color: #fff !important;
  }

  .styled-select:invalid {
    color: #7f91a6;
    background-color: #fff;
  }

  .search-form {
    height: 400px;
  }

  ::v-deep #example-datepicker {
    color: #154279;
    font-size: 1.25rem;
  }

  ::v-deep .vue-daterange-picker {
    width: 100%;
    height: 60px;
    padding: 0;
  }

  ::v-deep .vue-daterange-picker .form-control {
    border: none;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .wpo-select-section .wpo-select-area form .input-border,
  .wpo-select-section-s2 .wpo-select-area form .input-border {
    position: relative;
    border-right: 2px solid #c8ced4;
  }

  .for-date-tab .tabs div {
    font-size: 16px;
    background: #303443;
    margin: 0px 8px 0px 0px;
    border-radius: 50px;
    color: #fff;
    padding: 12px 32px;
    font-weight: 700;
  }

  .for-date-tab .tabs div.active {
    background: #fc3333;
  }

  @media (max-width: 991px) {

    .wpo-select-section .wpo-select-area form .input-border,
    .wpo-select-section-s2 .wpo-select-area form .input-border {
      border-right: 0;
      border-bottom: 1px solid #c8ced4;
    }
  }

  .datepicker-ui {
    border: none;
  }

  .datepicker-ui:focus {
    box-shadow: none;
  }

  .Select-Decor .form-check.form-check-inline,
  .time-Slot .form-check.form-check-inline {
    margin: 0px;
  }

  .Select-Decor .form-check.form-check-inline input,
  .time-Slot .form-check.form-check-inline input {
    display: none;
  }

  .time-Slot .form-check.form-check-inline input~label {
    border-radius: 50px;
    border: 2px solid #303443;
    color: #303443;
    padding: 12px 32px;
    margin-right: 8px;
    cursor: pointer;
  }

  .time-Slot .form-check.form-check-inline input~label:hover,
  .time-Slot .form-check.form-check-inline input~label:focus,
  .time-Slot .form-check.form-check-inline input:checked~label {
    border: 2px solid #fc3333;
    color: #ffff;
    background: #fc3333;
  }

  .Select-Decor .form-check.form-check-inline input~label {
    border-radius: 4px;
    border: 4px solid transparent;
    text-align: center;
    width: 150px;
    height: 150px;
    box-shadow: 0px 0px 8px #ccc;
    cursor: pointer;
  }

  .form-group.Decor-info .Select-Decor .form-check.form-check-inline input~label {
    margin-bottom: 15px;
    margin-right: 12px;
    border-radius: 12px;
    color: #000;
    height: auto;
  }

  .Select-Decor .form-check.form-check-inline input~label img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    padding: 4px;
    border-radius: 12px;
  }

  .form-group.Artist-info .Select-Decor .form-check.form-check-inline input~label {
    box-shadow: none;
    border-radius: 50%;
  }

  .form-group.Artist-info .Select-Decor .form-check.form-check-inline input~label img {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .Select-Decor .form-check.form-check-inline input~label:hover,
  .Select-Decor .form-check.form-check-inline input~label:focus,
  .Select-Decor .form-check.form-check-inline input:checked~label {
    border: 4px solid #f2f2f2;

    background: #fc3333;
  }

  form.card {
    padding:28px;
    border-radius: 20px;
    box-shadow: 0px 0px 8px;
  }

  .card.event-card {
    padding: 16px;
    border-radius: 20px;
    box-shadow: 0px 0px 8px;
  }

  .daterangepicker.openscenter {
    left: 70% !important;
  }

  .form-group.select-yn .Select-Decor .form-check.form-check-inline input~label {
    height: 36px;
    line-height: 31px;
    margin-right: 12px;
    width: 73px;
    padding: 0px;
    border-radius: 50px;
  }

  .row.common-btn .btn {
    border-radius: 50px !important;
    max-width: 200px;
    /* margin: 40px auto; */
    /* display: block; */
    /* float: right; */
    display: inline-block;
  }

  .form-group.adita-new label.form-check-label {
    height: auto !important;
    width: 150px !important;
    border-radius: 12px !important;
    margin-bottom: 12px !important;
  }


  .decor-modal-info {

      width: 100%;
      text-align: left !important;
          align-items: center;
  }
  .decor-modal-info-left {
      width: 100%;
      margin-bottom:20px;
  }
  .decor-modal-info-left img{
      width: 100%;
      height: 100%;
      object-fit:cover;
  }
  .decor-modal-info-right {
      width: 100%;
      padding-left: 30px;
  }
  .b-form-timepicker.form-control {
      padding: 0px;
      border-radius: 20px;
  }
  .preview-accor button.btn.btn-info {
      background-color: #fff;
      border: none;
      display: flex;
      outline: none !important;
      box-shadow: none;
    align-items: center;
  }
  .ac-top-left {
      width: 150px;
      text-align: left;
  }
  .ac-top-left h1{
      font-size: 42px;
  }
  .ac-top-left h1{
      font-size: 42px;
          margin-bottom:0px;
  }
  small.ac-t-day {
      font-size: 20px;
      display: block;
      line-height: 20px;
          color: #fc3333;
  }
  .ac-top-left h1 span small{
      font-size: 14px;
  }
  .ac-top-right {
      width: calc(100%);
          text-align: left;
      position:relative;
  }
  .ac-top-right img {
      position: absolute;
      top: calc(50% - 14px);
      right: 0;
      z-index: 999;
      width: 27px;
      pointer-events: none;
  }
  .ac-top-right h2 small{
      font-size:12px;
      display:block;
          color: #fc3333;
          font-weight: 700;
      margin-top: 6px;
  }
  .ac-top-right p{
      margin-bottom:0px;
  }
  .priv-det-list {
      padding: 12px 24px;
      box-shadow: 0px 0px 8px #ccc;
      border-radius: 20px;
  }
  .priv-det-list h2 small {
      display: block;
      font-size: 15px;
  }
  .pick-des {
      display: flex;
      width: 100%;
      max-width: 300px;
      border-radius: 12px;
      margin: 10px 0px;
      box-shadow: 0px 0px 8px #ccc;
      overflow: hidden;
  }
  .pic-top-img {
      width: 100px;
      height: 80px;
  }
  .pic-top-img img{
      width: 100%;
      height: 100%;
      object:cover;
  }
  .pic-bot-con {
      width: calc(100% - 100px);
      padding-left: 12px;
      padding: 8px;
  }
  .pic-bot-con h5 {
      font-size: 16px;
      color: #433e43;
      font-weight: 400;
  }
  .pic-bot-con h4 {
      font-size: 14px;
      color: #433e43;
      font-weight: 700;
  }
  h2.g-u-dat {
    margin:0px;
  }
  h2.g-u-dat small{
    font-size:12px;
        line-height: 22px;
      display: flex;
      align-items: center;
          margin-top: 8px;
  }
  h2.g-u-dat small i{
    margin-right:12px;
  }
  h2.g-u-dat small i.flaticon-calendar{
    margin-left:12px;
  }
  span.alltotal {
      font-size: 24px;
      font-weight: 700;
      color: #fc3333;
      position: ABSOLUTE;
      right: 21px;
      top: 10px;
  }
  .forview {
      background: #fff;
      padding: 2px 12px;
      position: absolute;
      border-radius: 4px;
      left: calc(50% - 36px);
      display: none;
  }
  .Select-Decor .form-check.form-check-inline input:checked~label~ .forview{
      display: block !important;
  }
  .artlink{
        position: absolute;
      top: 50%;
      left: calc(50% - 24px);
      background: #fc3333;
      padding: 4px 12px;
      border-radius: 12px;
      box-shadow: 0px 0px 8px #ccc;
      color: #fff;
  }
  .Bride-groom-box{
    width:40px;
  }
  .prive-min-img{
    height:150px;
    object-fit:cover;
  }
</style>
