import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase("loginRequest", (state) => {
      state.loading = true;
    })
    .addCase("loadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("logoutRequest", (state) => {
      state.loading = true;
    })
    .addCase("registerRequest", (state) => {
      state.loading = true;
    });
  builder
    .addCase("loginSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    })
    .addCase("loadUserSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("logoutSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
      state.user = null;
    })
    .addCase("registerSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    });
  builder
    .addCase("loginFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("loadUserFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("logoutFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })
    .addCase("registerFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("updateProfileRequest", (state,action) => {
      state.loading = true;
    })
    .addCase("updateProfileSuccess", (state, action) => {
      state.loading=false;
      state.message=action.payload;
    })
    .addCase("updateProfileFail", (state, action) => {
      state.loading=false;
      state.error=action.payload;
    })
    .addCase("updatePicRequest", (state, action) => {
      state.loading=true; 
    })
    .addCase("updatePicSuccess", (state, action) => {
      state.loading=false;
      state.message=action.payload;
    })
    .addCase("updatePicFail", (state, action) => {
      state.loading=false;
      state.error = action.payload; 
    })
    .addCase("updatePostRequest", (state, action) => {
      state.loading=true; 
    })
    .addCase("updatePostSuccess", (state, action) => {
      state.loading=false;
      state.message=action.payload;
    })
    .addCase("updatePostFail", (state, action) => {
      state.loading=false;
      state.error = action.payload; 
    })
    .addCase("updateReelRequest", (state, action) => {
      state.loading=true; 
    })
    .addCase("updateReelSuccess", (state, action) => {
      state.loading=false;
      state.message=action.payload;
    })
    .addCase("updateReelFail", (state, action) => {
      state.loading=false;
      state.error = action.payload; 
    })
    .addCase("myAllPostRequest", (state, action) => {
      state.loading=true; 
    })
    .addCase("myAllPostSuccess", (state, action) => {
      state.loading=false;
      state.posts=action.payload;
    })
    .addCase("myAllPostFail", (state, action) => {
      state.loading=false;
      state.error = action.payload;
    })
    .addCase("otherPostRequest", (state, action) => {
      state.loading=true; 
    })
    .addCase("otherPostSuccess", (state, action) => {
      state.loading=false;
      state.otherposts=action.payload;
    })
    .addCase("otherPostFail", (state, action) => {
      state.loading=false;
      state.error = action.payload;
    })
  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});
