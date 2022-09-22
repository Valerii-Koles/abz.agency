    <template>
    <div class="post-request-block">
      <div class="post-request-title">Working with POST request</div>
      <div class="my-form">
        <form 
        @submit.prevent="submitForm()"
         novalidate="novalidate"
         class="post-form">
          <div class="input-form-wrap"
          >
            <input class="input-form" placeholder="Your name"
            v-model="name"
            :class="{'error': v$.name.$error}"
            >
            <div class="input-error-text" v-if="v$.name.$error">Name field has an error.</div>
          </div>
          <div class="input-form-wrap">
              <input class="input-form" placeholder="Email"
            v-model="email"
            :class="{'error': v$.email.$error}"
            />
            <div class="input-error-text" v-if="v$.email.$error">Email field has an error.</div>
          </div>
          <div class="input-form-wrap">
            <!-- v-mask="'+38(0##)-###-##-##'" -->
            <input class="input-form" placeholder="Phone"
            v-model="phone" 
            :class="{'error': v$.phone.$error}"
            >
            <div class="number-example"
            :class="{'error': v$.phone.$error}"
            >+38 (XXX) XXX - XX - XX</div>
             <div class="input-error-text" v-if="v$.phone.$error">Phone field has an error.</div>
          </div>
          <div class="form-radio-block">
            <div class="form-radio-title">Select your position</div>
            <div class="form-radio-wrap-item">
              <input class="input-radio-form" type="radio" id="designer" name="position_id" value="1" v-model="position_id" checked>
              <label for="designer">Designer</label>
            </div>
            <div class="form-radio-wrap-item">
               <input class="input-radio-form" type="radio" id="front" name="position_id" value="2" v-model="position_id">
              <label for="front">Frontend developer</label>
            </div>
            <div class="form-radio-wrap-item">
               <input class="input-radio-form" type="radio" id="back" name="position_id" value="3" v-model="position_id">
              <label for="back">Backend developer</label>
            </div>
            <div class="form-radio-wrap-item">
              <input class="input-radio-form" type="radio" id="qa" name="position_id" value="4" v-model="position_id">
              <label for="qa">QA</label>
            </div>
          </div>
          <div class="input-form-wrap">
            <input type="file"
            ref="photo"
            id="photo" name="photo" 
            accept="image/png, image/jpeg"
            :class="{'error': v$.photo.$error}"
            >
            <label for="photo" class="custom-file-upload"
            :class="{'error': v$.photo.$error}"
            >
                <div class="upload-block"
                :class="{'error': v$.photo.$error}"
                >
                  Upload
                </div>
                <div class="upload-photo-block"
                >
                  Upload your photo
                </div>
            </label>
            <div class="input-error-text" v-if="v$.photo.$error">Error text</div>
          </div>
          <div class="form-btn-wrap">
            <button class="form-btn" type="submit"
          
            >Sing Up</button>
          </div>
        </form>
      </div>
    </div>
    </template>
    <script>
    import useVuelidate from '@vuelidate/core';
    import { mask } from "vue-the-mask";
    import { required, email, minLength, maxLength } from '@vuelidate/validators';
    
    export default {
      directives: { mask },
        setup () {
            return { v$: useVuelidate() }
        },
        data () {
            return {
                isButtonDisabled: true,
                name: '',
                phone: '',
                email: '',
                position_id: '',
                photo: '',
            }
        },
        validations() {
            return {
                name: {required, minLength: minLength(2), maxLength: maxLength(60)},
                phone: {required, minLength: minLength(2), maxLength: maxLength(100)},
                email: {required, email, minLength: minLength(2), maxLength: maxLength(100)},
                photo: {required}
                }
        },
        methods: {
          async submitForm () {
      const isFormCorrect = await this.v$.$validate()
      
      if (!isFormCorrect) {
        console.log('error')
      } else {
        console.log('11')
      }
      const token = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(function(response) { 
      // console.log(response)
      return response.json(); })
    .then(function(data) { 
      return data.token

    }) 
    .catch(function(error) { console.log(error)});
    //  console.log(token)
    var formData = new FormData();
    var photo = this.$refs.photo;
     formData.append('name', this.name);
     formData.append('phone', this.phone);
     formData.append('email', this.email);
     formData.append('position_id', this.position_id);
     formData.append('photo', photo.files[0]);
    //  console.log(photo)
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST', 
       body: formData, headers: { 'Token': token, }, 
      }) 
       .then(function(response) { return response.json(); }) 
       .then(function(data) { 
        console.log(data); 
        if(data.success) { 
          console.log(formData)
         } 
         else { 
          console.log('пользователь уже существует')
          } }) 
         .catch(function(error) { console.log(error) });
      }
    }
    }
    </script>
