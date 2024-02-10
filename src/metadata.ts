/* eslint-disable */
export default async () => {
  const t = {
    ['./modules/user/enums/user.enum']: await import(
      './modules/user/enums/user.enum'
    ),
    ['./modules/access/entities/access.entity']: await import(
      './modules/access/entities/access.entity'
    ),
    ['./modules/user/entities/user.entity']: await import(
      './modules/user/entities/user.entity'
    ),
    ['./modules/user/dto/get-user.dto']: await import(
      './modules/user/dto/get-user.dto'
    ),
    ['./modules/auth/dto/signin-response.dto']: await import(
      './modules/auth/dto/signin-response.dto'
    ),
    ['./modules/category/entities/category.entities']: await import(
      './modules/category/entities/category.entities'
    ),
  };
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./modules/access/dto/access.create.dto'),
          {
            CreateAccessDto: {
              key_name: { required: true, type: () => String },
              user_id: {
                required: true,
                type: () => require('mongoose').Types.ObjectId,
              },
              api_key: { required: true, type: () => String },
              expiry: { required: true, type: () => Date },
              is_expired: { required: true, type: () => Boolean },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/user/entities/user.entity'),
          {
            User: {
              first_name: { required: true, type: () => String },
              last_name: { required: true, type: () => String },
              email: { required: true, type: () => String },
              password: { required: true, type: () => String },
              phone: { required: true, type: () => Number },
              photo_url: { required: true, type: () => String },
              user_type: { required: false, type: () => String },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/access/entities/access.entity'),
          {
            Access: {
              key_name: { required: true, type: () => String },
              user_id: {
                required: true,
                type: () => require('mongoose').Types.ObjectId,
              },
              api_key: { required: true, type: () => String },
              expiry: { required: true, type: () => Date },
              is_expired: { required: true, type: () => Boolean },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/category/dto/get-category.dto'),
          {
            GetCategoryDto: {
              _id: { required: false, type: () => String },
              name: { required: false, type: () => String },
              description: { required: false, type: () => String },
              parent_category_id: {
                required: false,
                type: () => require('mongoose').Types.ObjectId,
              },
              image: { required: false, type: () => Object },
              image_url: { required: false, type: () => String },
              added_by: {
                required: false,
                type: () => require('mongoose').Types.ObjectId,
              },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: false, type: () => String },
              location: { required: false, type: () => String },
            },
            FilterCategroyDto: {
              _id: { required: false, type: () => String },
              name: { required: false, type: () => String },
              parent_category_id: {
                required: false,
                type: () => require('mongoose').Types.ObjectId,
              },
              added_by: {
                required: false,
                type: () => require('mongoose').Types.ObjectId,
              },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: false, type: () => String },
              location: { required: false, type: () => String },
            },
          },
        ],
        [
          import('./modules/inventory/dto/get-inventory.dto'),
          {
            GetInventoryDto: {
              id: { required: false, type: () => String },
              name: { required: false, type: () => String },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: false, type: () => String },
              location: { required: false, type: () => String },
            },
            FilterInventoryDto: {
              id: { required: false, type: () => String },
              name: { required: false, type: () => String },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: false, type: () => String },
              location: { required: false, type: () => String },
            },
          },
        ],
        [
          import('./modules/user/dto/get-user.dto'),
          {
            GetUserDto: {
              _id: { required: false, type: () => String },
              first_name: { required: false, type: () => String },
              last_name: { required: false, type: () => String },
              email: { required: false, type: () => String },
              phone: { required: false, type: () => Number },
              photo_url: { required: false, type: () => String },
              user_type: { required: false, type: () => String },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: false, type: () => String },
              location: { required: false, type: () => String },
            },
            FilterUserDto: {
              _id: { required: false, type: () => String },
              first_name: { required: false, type: () => String },
              last_name: { required: false, type: () => String },
              email: { required: false, type: () => String },
              phone: { required: false, type: () => Number },
              user_type: {
                required: false,
                enum: t['./modules/user/enums/user.enum'].UserTypeEnum,
              },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: false, type: () => String },
              location: { required: false, type: () => String },
            },
          },
        ],
        [
          import('./modules/user/dto/create-user.dto'),
          {
            CreateUserDto: {
              first_name: { required: true, type: () => String },
              last_name: { required: true, type: () => String },
              email: { required: true, type: () => String },
              password: { required: true, type: () => String },
              phone: { required: true, type: () => Number },
              photo_url: { required: true, type: () => String },
              user_type: { required: false, type: () => String },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/user/dto/update-user.dto'),
          {
            UpdateUserDto: {
              first_name: { required: false, type: () => String },
              last_name: { required: false, type: () => String },
              password: { required: false, type: () => String },
              photo_url: { required: false, type: () => String },
              user_type: { required: false, type: () => String },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/auth/dto/signin.dto'),
          {
            SignInWithEmailPasswordDto: {
              email: { required: true, type: () => String },
              password: { required: true, type: () => String },
            },
            VerificationJWTTokenDto: {
              access_token: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/auth/dto/signin-response.dto'),
          {
            SignInResponseWithEmailPasswordDto: {
              access_token: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/category/dto/create-category.dto'),
          {
            CreateCategoryDto: {
              name: { required: true, type: () => String },
              description: { required: false, type: () => String },
              parent_category_id: {
                required: false,
                type: () => require('mongoose').Types.ObjectId,
              },
              image: { required: false, type: () => Object },
              image_url: { required: false, type: () => String },
              added_by: {
                required: true,
                type: () => require('mongoose').Types.ObjectId,
              },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/category/dto/update-category.dto'),
          {
            UpdateCategoryDto: {
              name: { required: false, type: () => String },
              description: { required: false, type: () => String },
              parent_category_id: {
                required: false,
                type: () => require('mongoose').Types.ObjectId,
              },
              image: { required: false, type: () => Object },
              image_url: { required: false, type: () => String },
              added_by: {
                required: false,
                type: () => require('mongoose').Types.ObjectId,
              },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/geos/dto/request-geo.dto'),
          {
            RequestLatitudeLongitudeGeoDto: {
              firstLocationLatitude: {
                required: true,
                type: () => String,
                minimum: -90,
                maximum: 90,
              },
              firstLocationLongitude: {
                required: true,
                type: () => String,
                minimum: -180,
                maximum: 180,
              },
              secondLocationLatitude: {
                required: true,
                type: () => String,
                minimum: -90,
                maximum: 90,
              },
              secondLocationLongitude: {
                required: true,
                type: () => String,
                minimum: -180,
                maximum: 180,
              },
            },
          },
        ],
        [
          import('./modules/inventory/entities/inventory.entity'),
          {
            Inventory: {
              item_id: { required: true, type: () => String },
              name: { required: true, type: () => String },
              model_number: { required: true, type: () => String },
              description: { required: true, type: () => String },
              category_id: {
                required: true,
                type: () => require('mongoose').Types.ObjectId,
              },
              quantity: { required: true, type: () => Number },
              image: { required: true, type: () => Object },
              image_url: { required: true, type: () => String },
              added_by: {
                required: true,
                type: () => require('mongoose').Types.ObjectId,
              },
              barcode: { required: true, type: () => String },
              qrcode: { required: true, type: () => Object },
              qrcode_url: { required: true, type: () => String },
              weight: { required: true, type: () => String },
              width: { required: true, type: () => String },
              height: { required: true, type: () => String },
              depth: { required: true, type: () => String },
              is_refrigeration_required: {
                required: true,
                type: () => Boolean,
              },
              inventory_location: { required: true, type: () => String },
              minimum_stock_level: { required: true, type: () => Number },
              maximum_stock_level: { required: true, type: () => Number },
              is_in_stock: { required: true, type: () => Boolean },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/inventory/dto/create-inventory.dto'),
          {
            CreateInventoryDto: {
              item_id: { required: true, type: () => String },
              name: { required: true, type: () => String },
              model_number: { required: true, type: () => String },
              description: { required: false, type: () => String },
              category_id: {
                required: true,
                type: () => require('mongoose').Types.ObjectId,
              },
              quantity: { required: true, type: () => Number },
              image: { required: false, type: () => Object },
              image_url: { required: false, type: () => String },
              added_by: {
                required: true,
                type: () => require('mongoose').Types.ObjectId,
              },
              barcode: { required: false, type: () => String },
              qrcode: { required: false, type: () => Object },
              qrcode_url: { required: false, type: () => String },
              weight: { required: false, type: () => String },
              width: { required: false, type: () => String },
              height: { required: false, type: () => String },
              depth: { required: false, type: () => String },
              is_refrigeration_required: {
                required: false,
                type: () => Boolean,
              },
              inventory_location: { required: false, type: () => String },
              minimum_stock_level: { required: false, type: () => Number },
              maximum_stock_level: { required: false, type: () => Number },
              is_in_stock: { required: false, type: () => Boolean },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/inventory/dto/update-inventory.dto'),
          {
            UpdateInventoryDto: {
              name: { required: false, type: () => String },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/messenger/dto/otp.dto'),
          {
            OTPDto: {
              name: { required: true, type: () => String },
              OTP: { required: true, type: () => String },
            },
            OTPRequestDto: {
              to: { required: true, type: () => String },
              name: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/access/dto/access.update.dto'),
          {
            UpdateAuthDto: {
              key_name: { required: true, type: () => String },
              user_id: {
                required: true,
                type: () => require('mongoose').Types.ObjectId,
              },
              api_key: { required: true, type: () => String },
              expiry: { required: true, type: () => Date },
              is_expired: { required: true, type: () => Boolean },
              is_active: { required: false, type: () => Boolean },
              is_deleted: { required: false, type: () => Boolean },
              ip_address: { required: true, type: () => String },
              location: { required: true, type: () => String },
            },
          },
        ],
        [import('./modules/geos/entities/geo.entity'), { Geo: {} }],
      ],
      controllers: [
        [
          import('./modules/access/access.controller'),
          {
            AccessController: {
              getAllAccess: {
                type: [t['./modules/access/entities/access.entity'].Access],
              },
              getaccessById: {
                type: t['./modules/access/entities/access.entity'].Access,
              },
              getaccessByUserId: {
                type: [t['./modules/access/entities/access.entity'].Access],
              },
              createUser: {
                type: t['./modules/access/entities/access.entity'].Access,
              },
            },
          },
        ],
        [
          import('./modules/user/user.controller'),
          {
            UserController: {
              getAllUsers: {
                type: [t['./modules/user/entities/user.entity'].User],
              },
              getUserById: {
                type: t['./modules/user/entities/user.entity'].User,
              },
              createUser: {
                type: t['./modules/user/entities/user.entity'].User,
              },
              updateUser: {
                type: t['./modules/user/entities/user.entity'].User,
              },
              deleteUser: {
                type: t['./modules/user/dto/get-user.dto'].GetUserDto,
              },
              deleteMultipleUsers: {},
            },
          },
        ],
        [
          import('./modules/auth/auth.controller'),
          {
            AuthController: {
              generateToken: { type: Object },
              verifyJWTToken: { type: Object },
              decodeJWTToken: { type: Object },
              signin: {
                type: t['./modules/auth/dto/signin-response.dto']
                  .SignInResponseWithEmailPasswordDto,
              },
            },
          },
        ],
        [
          import('./modules/category/category.controller'),
          {
            CategoryController: {
              getCategories: {
                type: [
                  t['./modules/category/entities/category.entities'].Category,
                ],
              },
              createCategory: {
                type: t['./modules/category/entities/category.entities']
                  .Category,
              },
              updateCategory: {
                type: t['./modules/category/entities/category.entities']
                  .Category,
              },
              deleteCategory: { type: Object },
              deleteMultipleCategories: {},
            },
          },
        ],
        [
          import('./modules/geos/geos.controller'),
          {
            GeosController: {
              getDistanceBetweenTwoGeoPoints: { type: String },
            },
          },
        ],
        [
          import('./modules/inventory/inventory.controller'),
          {
            InventoryController: {
              create: { type: Object },
              getinventory: { type: Object },
              update: { type: String },
              remove: { type: String },
            },
          },
        ],
        [
          import('./modules/messenger/messenger.controller'),
          { MessengerController: { sendOTP: { type: Object } } },
        ],
      ],
    },
  };
};
